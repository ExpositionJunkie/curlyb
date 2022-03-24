import {baseUrl} from "../../shared/baseUrl";
import * as ActionTypes from './ActionTypes';


//account example
export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};


//blogs

export const fetchBlogs = () => dispatch => {
  dispatch(blogsLoading());

  return fetch(baseUrl + 'blogs')
      .then(response => {
              if (response.ok) {
                  return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
                  throw error;
              }
          },
          error => {
              const errMess = new Error(error.message);
              throw errMess;
          }
      )
      .then(response => response.json())
      .then(blogs => dispatch(addBlogs(blogs)))
      .catch(error => dispatch(blogsFailed(error.message)));
};

export const blogsLoading = () => ({
  type: ActionTypes.BLOGS_LOADING
});

export const blogsFailed = errMess => ({
  type: ActionTypes.BLOGS_FAILED,
  payload: errMess
});

export const addBlogs = blogs => ({
  type: ActionTypes.ADD_BLOGS,
  payload: blogs
});


//comments
export const fetchComments = () => dispatch => {
  return fetch(baseUrl + '/comments')
      .then(response => {
              if (response.ok) {
                  return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
                  throw error;
              }
          },
          error => {
              const errMess = new Error(error.message);
              throw errMess;
          }
      )
      .then(response => response.json())
      .then(comments => dispatch(addComments(comments)))
      .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (campsiteId, rating, text) => dispatch => {

  const newComment = {
      campsite: campsiteId,
      rating: rating,
      text: text
  }
  console.log('Comment ', newComment);

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'comments', {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': bearer
      },
      credentials: 'same-origin'
  })
  .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => { throw error; }
  )
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error => {
      console.log('post comment', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
  });
};


export const requestLogin = creds => {
  return {
      type: ActionTypes.LOGIN_REQUEST,
      creds
  }
}

export const receiveLogin = response => {
  return {
      type: ActionTypes.LOGIN_SUCCESS,
      token: response.token
  }
}

export const loginError = message => {
  return {
      type: ActionTypes.LOGIN_FAILURE,
      message
  }
}

export const loginUser = creds => dispatch => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds))

  return fetch(baseUrl + 'users/login', {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json' 
      },
      body: JSON.stringify(creds)
  })
  .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => { throw error; }
  )
  .then(response => response.json())
  .then(response => {
      if (response.success) {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.token);
          localStorage.setItem('creds', JSON.stringify(creds));
          // Dispatch the success action
          dispatch(fetchFavorites());
          dispatch(receiveLogin(response));
      } else {
          const error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
  return {
      type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
      type: ActionTypes.LOGOUT_SUCCESS
  }
}

// Logs the user out
export const logoutUser = () => dispatch => {
  dispatch(requestLogout())
  localStorage.removeItem('token');
  localStorage.removeItem('creds');
  dispatch(favoritesFailed('Error 401: Unauthorized'));
  dispatch(receiveLogout())
}

export const postFavorite = campsiteId => dispatch => {

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'favorites/' + campsiteId, {
      method: 'POST',
      headers: {
          'Authorization': bearer
      },
      credentials: 'same-origin'
  })
  .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => { throw error; }
  )
  .then(response => response.json())
  .then(favorites => {
      console.log('Favorite Added', favorites);
      dispatch(addFavorites(favorites));
  })
  .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = campsiteId => dispatch => {

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'favorites/' + campsiteId, {
      method: 'DELETE',
      headers: {
          'Authorization': bearer
      },
      credentials: 'same-origin'
  })
  .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => { throw error; }
  )
  .then(response => response.json())
  .then(favorites => {
      console.log('Favorite Deleted', favorites);
      dispatch(addFavorites(favorites));
  })
  .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => dispatch => {
  dispatch(favoritesLoading());

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch(baseUrl + 'favorites', {
      headers: {
          'Authorization': bearer
      },
  })
  .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => { throw error; }
  )
  .then(response => response.json())
  .then(favorites => dispatch(addFavorites(favorites)))
  .catch(error => dispatch(favoritesFailed(error.message)));
}

export const favoritesLoading = () => ({
  type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = errMess => ({
  type: ActionTypes.FAVORITES_FAILED,
  payload: errMess
});

export const addFavorites = favorites => ({
  type: ActionTypes.ADD_FAVORITES,
  payload: favorites
});
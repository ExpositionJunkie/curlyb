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

//blog
//all
export const getAllBlogs = (all) => {
    return (dispatch) => {
        dispatch({
          type: "getAllBlogs",
          payload: all,
        });
      };
}

export const deleteAllBlogs = (all) => {
    return (dispatch) => {
        dispatch({
          type: "deleteAllBlogs",
          payload: all,
        });
      };
}


//individual
export const getBlogEntry = (blogId) => {
    return (dispatch) => {
      dispatch({
        type: "getBlogEntry",
        payload: blogId,
      });
    };
  };

export const postBlogEntry = (blogEntry) => {
  return (dispatch) => {
    dispatch({
      type: "postBlogEntry",
      payload: blogEntry,
    });
  };
};

export const editBlog = (blogEntry) => {
  return (dispatch) => {
    dispatch({
      type: "editBlogEntry",
      payload: blogEntry,
    });
  };
};

export const deleteBlog = (blogId) => {
    return (dispatch) => {
      dispatch({
        type: "deleteBlogEntry",
        payload: blogId,
      });
    };
  };



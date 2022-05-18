import * as ActionTypes from "../ActionCreators/ActionTypes";

export const BlogsByTag = (
  state = {
    isLoading: true,
    errMess: null,
    blogs: [],
    blog: {},
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BLOGS_BY_TAG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blogs: action.payload,
      };
    case ActionTypes.BLOGS_BY_TAG_LOADING:
      return { ...state, isLoading: true, errMess: null, blogs: null };

    case ActionTypes.BLOGS_BY_TAG_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, blogs: null };

    default:
      return state;
  }
};

export const selectBlogsByTag = state => state.BlogsByTag
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
    case ActionTypes.ADD_BLOG_BY_TAG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blog: action.payload,
      };
    case ActionTypes.BLOGS_BY_TAG_LOADING:
      return { ...state, isLoading: true, errMess: null, blogs: [] };

    case ActionTypes.BLOGS_BY_TAG_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

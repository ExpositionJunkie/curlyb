const blogReducer = (state = 0, action) => {
  switch (action.type) {
    case "getAllBlogs":
      return action.payload;
    case "deleteAllBlogs":
      return action.payload;
    case "getBlogEntry":
      return action.payload;
    case "postBlogEntry":
      return action.payload;
    case "editBlog":
      return action.payload;
    case "deleteBlogEntry":
      return action.payload;
    default:
      return state;
  }
};

export default blogReducer;

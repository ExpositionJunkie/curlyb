//https://www.youtube.com/watch?v=9jULHSe41ls
//Really good refresher or crash course on Redux
//Common sense approach
import { combineReducers } from "redux";
import { Blogs } from "./blogsReducer";
import { BlogsByTag } from "./blogsByTagReducer";
import { Comments } from "./commentsReducer";
import { Favorites } from "./favoritesReducer";
import { Auth } from "./authReducer";
import { Signup } from "./singupReducer";

const reducers = combineReducers({
  blogs: Blogs,
  blogsByTag: BlogsByTag,
  comments: Comments,
  favorites: Favorites,
  auth: Auth,
  signup: Signup,
});

export default reducers;

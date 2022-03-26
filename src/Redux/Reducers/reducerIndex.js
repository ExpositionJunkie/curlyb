//https://www.youtube.com/watch?v=9jULHSe41ls
//Really good refresher or crash course on Redux
//Common sense approach
import { combineReducers } from "redux";
import {Blogs} from "./blogsReducer";
import { Comments } from "./commentsReducer";
import { Favorites } from "./favoritesReducer"
import { Auth } from "./authReducer"

const reducers = combineReducers({
  blogs: Blogs,
  comments: Comments,
  favorites: Favorites,
  auth: Auth,
});

export default reducers;

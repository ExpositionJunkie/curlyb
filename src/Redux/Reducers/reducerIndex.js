//https://www.youtube.com/watch?v=9jULHSe41ls
//Really good refresher or crash course on Redux
//Common sense approach
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import {Blogs} from "./blogsReducer";

const reducers = combineReducers({
  account: accountReducer,
  blogs: Blogs,
});

export default reducers;

//https://www.youtube.com/watch?v=9jULHSe41ls
//Really good refresher or crash course on Redux
//Common sense approach
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;

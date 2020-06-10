import { combineReducers } from "redux";
import eventReducer from "./eventReducers";
import userReducer from "./userReducers";
import loginReducer from "./loginReducer";

export default combineReducers({
  event: eventReducer,
  user: userReducer,
  login: loginReducer
});

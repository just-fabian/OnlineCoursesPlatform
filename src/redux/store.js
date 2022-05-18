import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { 
  courseReducer, 
  fragmentReducer, 
  postReducer, 
  specialtyReducer, 
  teacherReducer 
} from "./reducers";

export default createStore(
  combineReducers({
    postReducer,
    courseReducer,
    specialtyReducer,
    teacherReducer,
    fragmentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as postReducer } from "./Post_Data_Reducer/reducer";
import { reducer as getReducer } from "./GET_Data_Reducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  GET_DATA_REDUCER: getReducer,
  POST_DATA_REDUCER: postReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

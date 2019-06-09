import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as MainReducer } from "./reducer";

const rootReducer = combineReducers({
  main: MainReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;

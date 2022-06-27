import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { appReducer } from "./reducers/app-reducer";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];



const rootReducer = combineReducers({
    app: appReducer,
  });

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middleware)
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
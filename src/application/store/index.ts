import { createStore, compose } from "redux";
import reducers from "./combine-reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const isDevelopmentEnvironment = process.env.NODE_ENV === "development";
const enableDevToolInDevelopment = () =>
  isDevelopmentEnvironment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const configure = (initialState = {}) => {
  const composeEnhancers = enableDevToolInDevelopment() || compose;
  const store = createStore(reducers, initialState, composeEnhancers());

  return store;
};

export default configure;

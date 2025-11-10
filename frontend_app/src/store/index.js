/**
 * Redux store configuration using Redux Toolkit.
 * Integrates feature flags to optionally include slices.
 */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
import { getFeatureFlags } from "./featureFlags";

const flags = getFeatureFlags();

/**
 * Assemble reducers conditionally based on feature flags.
 * Counter is always available; Todos is behind 'todos' flag.
 */
const rootReducer = combineReducers({
  counter: counterReducer,
  ...(flags.todos ? { todos: todosReducer } : {}),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_NODE_ENV !== "production",
});

// PUBLIC_INTERFACE
export function selectFlags() {
  /** Returns current feature flags snapshot */
  return flags;
}

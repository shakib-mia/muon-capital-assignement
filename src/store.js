import { createStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducers";

export const store = createStore(todoReducer);

import { TodoType } from "../types/types";

const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";

const initialState = [
  {
    title: "Title",
    description: "Description",
  },
];

// interface Todo {
//   title: String;
//   description: String;
// }

export const addTodo = (Todo: TodoType) => ({
  type: ADD_TODO,
  payload: Todo,
});

export const todoReducer = (
  state = initialState,
  action: { type: String },
  todo: TodoType
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo];

    default:
      return state;
  }
};

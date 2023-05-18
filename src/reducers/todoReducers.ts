import { TodoType } from "../types/types";

const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";

const initialState = [
  {
    title: "Carrot",
    description: "Carrot Improves eyesight.",
  },
  {
    title: "Bicycle",
    description: "Bicycle makes commuting easier.",
  },
];

export const addTodo = (Todo: TodoType) => ({
  type: ADD_TODO,
  payload: Todo,
});

export const todoReducer = (
  state = initialState,
  action: { type: String; payload: TodoType }
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

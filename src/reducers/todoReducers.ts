import { TodoType } from "./../types/types";
// import { TodoType } from "../types/types";

const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";

// const initialState = [
//   {
//     title: "Carrot",
//     description: "Carrot Improves eyesight.",
//   },
//   {
//     title: "Bicycle",
//     description: "Bicycle makes commuting easier.",
//   },
// ];

const initialState = [
  {
    heading: "Things To Buy",
    todo: [
      {
        title: "Carrot",
        description: "Carrot Improves eyesight.",
        name: "Things To Buy",
      },
      {
        title: "Bicycle",
        description: "Bicycle makes commuting easier.",
        name: "Things To Buy",
      },
    ],
  },
  {
    heading: "Things To Sell",
    todo: [
      {
        title: "Carrot",
        description: "Carrot Improves eyesight.",
        name: "Things To Sell",
      },
      {
        title: "Bicycle",
        description: "Bicycle makes commuting easier",
        name: "Things To Sell",
      },
    ],
  },
];

export const addTodo = (Todo: TodoType, name: String) => ({
  type: ADD_TODO,
  payload: { Todo, name },
});

export const todoReducer = (
  state = initialState,
  action: {
    type: String;
    payload: { Todo: { title: string; description: string; name: string } };
  }
) => {
  if (action.type === ADD_TODO) {
    // console.log(action);
    const found = state.filter((st) => st.heading === action.payload.Todo.name);

    if (found) {
      found[0].todo.push(action.payload.Todo);

      return [...state, found[0]];
      // return found;

      // console.log(found);
      // state.find
      // console.log(state);
    }
  } else {
    return state;
  }
};

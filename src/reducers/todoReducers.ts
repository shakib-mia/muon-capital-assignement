import { TodoType } from "./../types/types";
// import { TodoType } from "../types/types";

const ADD_TODO = "ADD_TODO";
const ADD_TODO_LIST = "ADD_TODO_LIST";
const EDIT_TODO = "EDIT_TODO";

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

export const addTodoList = (heading: String) => ({
  type: ADD_TODO_LIST,
  payload: { heading },
});

export const editTodo = (title: String, description: String) => ({
  type: EDIT_TODO,
  payload: { title, description },
});

export const todoReducer = (
  state = initialState,
  action: {
    type: String;
    payload: {
      itemId: number;
      Todo: {
        todoId: number;
        title: string;
        description: string;
        name: string;
      };
      heading: string;
    };
  }
) => {
  if (action.type === ADD_TODO) {
    const found = state.filter((st) => st.heading === action.payload.Todo.name);

    if (found) {
      found[0].todo.push(action.payload.Todo);
      // console.log(found);

      return [...state, found[0]];
    }
  } else if (action.type === ADD_TODO_LIST) {
    const { heading } = action.payload;
    const data = {
      heading,
      todo: [],
    };

    return [...state, data];
  } else if (action.type === EDIT_TODO) {
    // console.log(state);
    console.log(action.payload);

    return state;
  } else {
    return state;
  }
};

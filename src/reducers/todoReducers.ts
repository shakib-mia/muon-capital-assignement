import { TodoType } from "./../types/types";
// import { TodoType } from "../types/types";

const ADD_TODO = "ADD_TODO";
const ADD_TODO_LIST = "ADD_TODO_LIST";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = [
  {
    itemId: 0,
    heading: "Things To Buy",
    todo: [
      {
        todoId: 0,
        title: "Carrot",
        description: "Carrot Improves eyesight.",
        name: "Things To Buy",
      },
      {
        todoId: 1,
        title: "Bicycle",
        description: "Bicycle makes commuting easier.",
        name: "Things To Buy",
      },
    ],
  },
  {
    itemId: 1,
    heading: "Things To Sell",
    todo: [
      {
        todoId: 0,
        title: "Carrot",
        description: "Carrot Improves eyesight.",
        name: "Things To Sell",
      },
      {
        todoId: 1,
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

export const editTodo = (title: String, description: String, id: Number) => ({
  type: EDIT_TODO,
  payload: { title, description, id },
});

export const deleteTodo = (todo: Object) => ({
  type: DELETE_TODO,
  payload: todo,
});

export const todoReducer = (
  state = initialState,
  action: {
    type: String;
    payload: {
      itemId: number;
      Todo: {
        title: string;
        description: string;
        name: string;
        todoId: number;
      };
      editedTodo: {
        title: String;
        name: String;
        description: String;
        todoId: number;
      };
      heading: string;
      name: String;
      todoId: number;
    };
  }
) => {
  if (action.type === ADD_TODO) {
    const found = state.filter((st) => st.heading === action.payload.Todo.name);

    if (found) {
      found[0].todo.push(action.payload.Todo);

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
    // console.log(action.payload.editedTodo);
    return state;
  } else if (action.type === DELETE_TODO) {
    const selectedList = state.find(
      (item) => item.heading === action.payload.name
    );

    // console.log(selectedList);
    const filteredItem = selectedList?.todo.filter(
      (item) => item.todoId !== action.payload.todoId
    );

    filteredItem &&
      selectedList?.todo.splice(0, selectedList?.todo.length, ...filteredItem);
    return state;
  } else {
    return state;
  }
};

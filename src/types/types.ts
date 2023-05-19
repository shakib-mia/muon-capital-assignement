export type TodoType = {
  title: String;
  description: String;
  name: String;
};

export type TodoList = {
  heading: String;
  todo: TodoType[];
}[];

// export type anotherType = {
//   heading: String;
//   todo: { title: String; description: String }[];
// };

export type anotherType = {
  firstReducer: {
    heading: String;
    todo: { title: String; description: String }[];
  }[];

  secondReducer: {
    visibility: Boolean;
    todoId: {
      description: string;
      name: String;
      title: string;
      todoId: number;
    };
  };
};

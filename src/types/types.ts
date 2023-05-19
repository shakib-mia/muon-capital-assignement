export type TodoType = {
  title: String;
  description: String;
  name: String;
};

export type TodoList = {
  heading: String;
  todo: TodoType[];
}[];

export type anotherType = {
  heading: String;
  todo: { title: String; description: String }[];
}[];

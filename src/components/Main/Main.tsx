import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../Topbar/Topbar";
import moneyBag from "./../../assets/icons/money-bag.webp";
import plus from "./../../assets/icons/plus.webp";
import { anotherType } from "../../types/types";
import ListItem from "../ListItem/ListItem";
import { addTodo, addTodoList } from "../../reducers/todoReducers";
import Drawer from "../Drawer/Drawer";

const Main = () => {
  const todos = useSelector((state) => state) as anotherType;
  const dispatch = useDispatch();
  const { secondReducer } = useSelector((state) => state) as anotherType;
  const { visibility } = secondReducer;

  // console.log(todos);

  const addTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const todo = {
      title: e.currentTarget.todoTitle.value,
      description: e.currentTarget.todoDescription.value,
      name: target.name,
    };

    // console.log(e.currentTarget.todoTitle.value);

    if (e.currentTarget.todoTitle.value.length < 3) {
      alert("Invalid Title");
    } else if (e.currentTarget.todoDescription.value.length < 3) {
      alert("Invalid Description");
    } else {
      // dispatch(addTodo(todo, target.name));
      dispatch(addTodo(todo, "jksjklfjkd"));
      // console.log(todo);
      e.currentTarget.reset();
    }
  };

  function removeDuplicates(arr: {}[]) {
    let uniqueSet = new Set(arr);
    let uniqueArr = Array.from(uniqueSet);
    // console.log(uniqueArr);
    return uniqueArr;
  }
  // console.log(todos.firstReducer);

  const uniqueArray = removeDuplicates(
    todos.firstReducer
  ) as anotherType["firstReducer"];

  const handleTodoListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (e.currentTarget.todoListName.value) {
      dispatch(addTodoList(target.todoListName.value));
      e.currentTarget.reset();
    }
  };

  // console.log(todos);
  return (
    <div className="w-[82%] text-white">
      <Topbar />

      <div className="flex">
        <div
          className={`
            ${visibility ? "w-3/4" : "w-full"}
           h-screen grid grid-cols-3 gap-[13px] border-r-[5px] border-[#242731] p-[18px]`}
        >
          {uniqueArray.map((item, id) => (
            <section key={id}>
              <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
                {item.heading}
              </h1>
              <form
                className="bg-[#191B20] p-[13px] rounded-[16px]"
                onSubmit={addTodoForm}
                id="form"
                name={item.heading?.split(" ").join(" ")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-[7.5px] items-center">
                    <img src={moneyBag} className="w-[24px] h-[24px]" alt="" />
                    <input
                      type="text"
                      placeholder="Add Todo"
                      name="todoTitle"
                      className="bg-transparent focus:outline-none placeholder:font-bold placeholder:text-[18px]"
                    />
                  </div>

                  <input
                    type="submit"
                    id="plus"
                    value=""
                    alt="plus"
                    className="cursor-pointer w-[27px] h-[27px]"
                    style={{
                      backgroundImage: `url(${plus})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <textarea
                  className="bg-transparent w-full resize-none placeholder:text-[#808191] focus:outline-none mt-[13px]"
                  name="todoDescription"
                  placeholder="Add Todo Description"
                  id=""
                  rows={2}
                ></textarea>
              </form>
              <div className="mt-[15px] flex flex-col gap-[7px]">
                {item.todo?.map((todo, id) => (
                  <ListItem todo={todo} key={id} todoId={todo} />
                ))}
              </div>
            </section>
          ))}

          <section>
            <form
              onSubmit={handleTodoListSubmit}
              className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px] text-[#6C6C6C] flex justify-between"
            >
              <input
                type="text"
                placeholder="Add Todo List"
                name="todoListName"
                className="bg-transparent focus:outline-none text-white placeholder:text-[#6C6C6C]"
              />
              <input
                type="submit"
                id="plus"
                value=""
                alt="plus"
                className="cursor-pointer w-[27px] h-[27px]"
                style={{
                  backgroundImage: `url(${plus})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </form>
          </section>
        </div>
        {visibility && <Drawer />}
      </div>
    </div>
  );
};

export default Main;

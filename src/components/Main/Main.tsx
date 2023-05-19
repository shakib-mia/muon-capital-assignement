import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../Topbar/Topbar";
import moneyBag from "./../../assets/icons/money-bag.webp";
import plus from "./../../assets/icons/plus.webp";
import { anotherType } from "../../types/types";
import ListItem from "../ListItem/ListItem";
import { addTodo } from "../../reducers/todoReducers";

const Main = () => {
  const todos = useSelector((state) => state) as anotherType;
  const dispatch = useDispatch();

  const addTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.target.name);
    const target = e.target as HTMLFormElement;
    // console.log(target.name);

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

  // console.log(todos);
  // todos.map((item) => item.todo.map((i) => console.log(i)));

  function removeDuplicates(arr: {}[]) {
    let uniqueSet = new Set(arr);
    let uniqueArr = Array.from(uniqueSet);
    // console.log(uniqueArr);
    return uniqueArr;
  }

  const uniqueArray = removeDuplicates(todos) as anotherType;

  return (
    <div className="w-[82%] text-white">
      <Topbar />

      <div className="flex">
        <div className="w-3/4 h-screen grid grid-cols-3 gap-[13px] border-r-[5px] border-[#242731] p-[18px]">
          {uniqueArray?.map((item, id) => (
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
                  <ListItem todo={todo} key={id} />
                ))}
              </div>
            </section>
          ))}

          {/* <section>
            <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
              List : Empty List
            </h1>
          </section>
          <section>
            <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
              List : Things to Buy
            </h1>
          </section> */}
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default Main;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../Topbar/Topbar";
import moneyBag from "./../../assets/icons/money-bag.webp";
import plus from "./../../assets/icons/plus.webp";
import { TodoType } from "../../types/types";
import pen from "./../../assets/icons/pen.webp";
import { addTodo } from "../../reducers/todoReducers";

const Main = () => {
  const todos = useSelector((state) => state) as TodoType[];
  const dispatch = useDispatch();
  // console.log(todos);

  const addTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = {
      title: e.currentTarget.todoTitle.value,
      description: e.currentTarget.todoDescription.value,
    };

    if (e.currentTarget.todoTitle.value.length < 3) {
      alert("Invalid Title");
    } else if (e.currentTarget.todoDescription.value.length < 3) {
      alert("Invalid Description");
    } else {
      dispatch(addTodo(todo));
      // console.log(todo);
      e.currentTarget.reset();
    }
  };

  return (
    <div className="w-[82%] text-white">
      <Topbar />

      <div className="flex">
        <div className="w-3/4 h-screen grid grid-cols-3 gap-[13px] border-r-[5px] border-[#242731] p-[18px]">
          <section>
            <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
              List : Things to Buy
            </h1>
            <form
              className="bg-[#191B20] p-[13px] rounded-[16px]"
              onSubmit={addTodoForm}
              id="form"
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
                  // onClick={addTodo}a
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
            {/* {myArray} */}
            <div className="mt-[15px] flex flex-col gap-[7px]">
              {todos.map(({ title, description }, id) => (
                <li
                  className="bg-[#191B20] py-[19px] px-[14px] rounded-[16px] list-none"
                  key={id}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-[7.5px] items-center text-[18px] font-bold">
                      <img
                        src={moneyBag}
                        className="w-[24px] h-[24px]"
                        alt=""
                      />
                      {title}
                    </div>

                    <input
                      type="submit"
                      id="plus"
                      value=""
                      alt="plus"
                      className="cursor-pointer w-[27px] h-[27px]"
                      style={{
                        backgroundImage: `url(${pen})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                  <div>{description}</div>
                </li>
              ))}
            </div>
          </section>

          <section>
            <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
              List : Empty List
            </h1>
          </section>
          <section>
            <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
              List : Things to Buy
            </h1>
          </section>
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default Main;

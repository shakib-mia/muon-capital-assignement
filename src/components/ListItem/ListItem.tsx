// import { TodoType } from "../../types/types";
import { useDispatch } from "react-redux";
import moneyBag from "./../../assets/icons/money-bag.webp";
import pen from "./../../assets/icons/pen.webp";
import { setIsVisible } from "../../reducers/visibilityReducers";

const ListItem = ({ todo, todoId, itemId }: any) => {
  const dispatch = useDispatch();
  // console.log(todoId);
  // const showEdit = () => {
  //   // alert("dfksdj");
  // };

  // console.log(todoId);

  return (
    <li
      className="bg-[#191B20] py-[19px] px-[14px] rounded-[16px] list-none"
      // key={id}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-[7.5px] items-center text-[18px] font-bold">
          <img src={moneyBag} className="w-[24px] h-[24px]" alt="" />
          {todo.title}
        </div>

        <input
          type="submit"
          id="pen"
          value=""
          alt="pen"
          className="cursor-pointer w-[27px] h-[27px]"
          onClick={() => dispatch(setIsVisible(true, todoId, itemId))}
          style={{
            backgroundImage: `url(${pen})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div>{todo.description}</div>
    </li>
  );
};

export default ListItem;

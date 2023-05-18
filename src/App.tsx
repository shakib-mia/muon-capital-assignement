import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <h1 className="bg-[#3772FF] text-center text-white font-medium py-[6px] leading-[26px] text-[14px]">
        Lorem Ipsum is simply dummy text of the printing
      </h1>

      <div className="flex">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;

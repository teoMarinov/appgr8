import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="flex justify-between p-2 px-5 border-b-2 border-gray-400/60 shadow-md h-[65px]">
      <button
        onClick={() => nav("/")}
        className="transition hover:scale-105 w-36 text-center p-2 rounded-xl border-2 border-gray-400"
      >
        <p>Home</p>
      </button>
      <button
        onClick={() => nav("/upload")}
        className="transition hover:scale-105 w-36 text-center p-2 rounded-xl border-2 border-gray-400"
      >
        <p>Upload Image</p>
      </button>
    </div>
  );
};

export default Header;

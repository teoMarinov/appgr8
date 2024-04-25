import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const nav = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search) return nav('/')
    setSearch("");
    nav(`/view/${search}`);
  };
  return (
    <div className="flex justify-between p-2 px-5 border-b-2 border-gray-400/60 shadow-md h-[65px]">
      <button
        onClick={() => nav("/")}
        className="transition hover:scale-105 w-36 text-center p-2 rounded-xl border-2 border-gray-400"
      >
        <p>Home</p>
      </button>
      <div className="relative">
        <input
          placeholder="Search for image by id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[600px] h-full rounded-full border border-gray-300 px-6"
        />
        <div
          className="h-full w-12 rounded-r-full flex items-center justify-center absolute top-0 right-0 transition cursor-pointer"
          onClick={handleSearch}
        >
          <FaMagnifyingGlass className="h-6 w-6 z-50" />
        </div>
      </div>
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

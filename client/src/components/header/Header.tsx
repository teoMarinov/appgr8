import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-2 px-5">
      <div className="transition hover:scale-105 w-36 text-center p-2 rounded-xl border-2 border-gray-400">
        <Link to="/">Home</Link>
      </div>
      <div className="transition hover:scale-105 w-36 text-center p-2 rounded-xl border-2 border-gray-400">
        <Link to="/upload">Upload Image</Link>
      </div>
    </div>
  );
};

export default Header;

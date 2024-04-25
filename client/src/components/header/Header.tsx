import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="transition hover:scale-105 w-fit p-2 absolute right-2 top-2 rounded-md border border-gray-200">
      <Link to="/upload">Upload an image</Link>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-emerald-900 ">
      <div className="flex gap-10">
      <h1 className="text-2xl font-bold ">RESTExplorer</h1>
        <Link to="/" className="hover:underline text-xl">Home</Link>
        <Link to="/countries" className="hover:underline text-xl">Countries</Link>
        <Link to="/about" className="hover:underline text-xl">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;


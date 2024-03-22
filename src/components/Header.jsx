import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-4xl flex flex-wrap">
            <span className="text-blue-800">TN</span>
            <span className="text-blue-400">Auto</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-blue-400" />
        </form>

        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <NavLink to="/" activeClassName="text-blue-500">
              Home
            </NavLink>
          </li>

          <li className="hidden sm:inline text-slate-700 hover:underline">
            <NavLink to="/about" activeClassName="text-blue-500">
              About
            </NavLink>
          </li>

          <li className=" text-slate-700 hover:underline">
            <NavLink to="/sign-in" activeClassName="text-blue-500">
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

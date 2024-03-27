import { NavLink } from "react-router-dom";
const HeaderNavigation = () => {
  return (
    <div className="bg-gray-400 border-2 border-green-700">
      <nav className="max-w-7xl">
        <div className="">
          <ul className="flex items-center justify-center w-full h-16 gap-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default HeaderNavigation;

import { NavLink } from "react-router-dom";
import { Home, CheckCheck, Check } from "lucide-react";
const HeaderNavigation = () => {
  return (
    <header className="bg-white border-b-2">
      <nav className="max-w-7xl">
        <div className="px-20">
          <ul className="flex items-center justify-between w-full h-14">
            <div className="flex items-center justify-center gap-2">
              <div className="p-1 bg-[#1f212e] text-white rounded-full">
                <Check strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Taskify Todo</h1>
              </div>
            </div>
            <div className="flex items-center justify-start gap-10">
              <li className="flex items-center justify-center gap-2">
                <div>
                  <Home size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <NavLink to="/">Home</NavLink>
                </div>
              </li>
              <li className="flex items-center justify-center gap-2">
                <div>
                  <CheckCheck size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <NavLink to="/about">About</NavLink>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default HeaderNavigation;

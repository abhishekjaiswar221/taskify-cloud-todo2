import { Link } from "react-router-dom";
import { Home, CheckCheck, Check } from "lucide-react";
const HeaderNavigation = () => {
  return (
    <header className="border-b-2 border-gray-200 bg-gray-50">
      <nav className="max-w-7xl">
        <div className="px-20">
          <ul className="flex items-center justify-between w-full h-14">
            <div className="flex items-center justify-center gap-2">
              <div className="p-1 bg-[#1e212f] text-white rounded-full">
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
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li className="flex items-center justify-center gap-2">
                <div>
                  <CheckCheck size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <Link to="/about">About</Link>
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

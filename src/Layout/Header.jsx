import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex items-center justify-between px-8 font-medium">
        {/* Left side - Brand */}
        <li className="text-blue-500 text-xl font-bold tracking-wide ml-32">
          Movie Hub
        </li>

        {/* Right side - Menu */}
        <div className="flex space-x-9 mr-60">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-black hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

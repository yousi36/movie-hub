import { NavLink } from "react-router-dom"
export function Header() {
    return (
        <nav className="bg-#F7F7F7 p-4 shadow-md">
  <div className="flex justify-between items-center px-20 font-montserrat text-lg">
    {/* Left: Logo */}
    <div className="text-blue-300 font-bold text-xl ml-20">
      Movie Hub
    </div>

    {/* Right: Links */}
    <ul className="flex space-x-11 text-black font-medium pr-[7rem] font-roboto text-base">
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
              ? "border-b-2 border-blue-300 pb-1 transition text-blue-300" 
              : "hover:text-blue-300 transition"
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
              ? "border-b-2 border-blue-300 pb-1 transition text-blue-300" 
              : "hover:text-blue-300 transition"
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
              ? "border-b-2 border-blue-300 pb-1 transition text-blue-300" 
              : "hover:text-blue-300 transition"
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
              ? "border-b-2 border-blue-300 pb-1 transition text-blue-300" 
              : "hover:text-blue-300 transition"
          }
        >
          About
        </NavLink>
      </li>
    </ul>
  </div>
</nav>

    )
}
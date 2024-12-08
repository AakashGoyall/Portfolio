import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme";

const Navbar = () => {

  const {uniqueColor, textChange, NavlinkColor, isDark} = useTheme();
  const changeBgColor = isDark? "bg-[#0c1827]" : "bg-[#cdcdcd]";

  const [hamBurger, setHamBurger] = useState(true);

  const clickBar = () => {
    setHamBurger(hamBurger ? false : true);
  };

  const changeBar = () => {
    setHamBurger(true);
  };

  return (
    <>
      <div className="px-4 flex md:hidden place-items-center">
        {hamBurger && (
          <i
            className= {`fa-solid fa-bars text-xl cursor-pointer`}
            style={{color: uniqueColor}}
            onClick={clickBar}
          ></i>
        )}

        {hamBurger || (
          <i
            className= {`fa-solid fa-xmark text-xl cursor-pointer`}
            style={{color: uniqueColor}}
            onClick={clickBar}
          ></i>
        )}
      </div>

      <ul
        className={`gap-5 ${
          !hamBurger ? "flex" : "hidden"
        } ${changeBgColor} md:flex-row md:text-xl 2xl:text-2xl md:place-items-center font-semibold md:flex nav-link top-[120%] absolute md:static md:bg-transparent md:w-auto p-4 md:p-0 `}
      >
        <li>
          <NavLink
            to="/"
            onClick={changeBar}
            className={({ isActive }) => 
          `border-b-2 ${isActive ? NavlinkColor : ""} ${textChange} block md:border-none pb-2 md:p-0`
        }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={changeBar}
            className={({ isActive }) => 
          `border-b-2 ${isActive ? NavlinkColor : ""} ${textChange} block md:border-none pb-2 md:p-0`
        }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            onClick={changeBar}
           className={({ isActive }) => 
          `border-b-2 ${isActive ? NavlinkColor : ""} ${textChange} block md:border-none pb-2 md:p-0`}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonial"
            onClick={changeBar}
            className={({ isActive }) => 
              `border-b-2 ${isActive ? NavlinkColor : ""} ${textChange} block md:border-none pb-2 md:p-0`}
          >
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" onClick={changeBar} className={({ isActive }) => 
          `${isActive ? NavlinkColor : ""} ${textChange} block md:border-none pb-2 md:p-0`}>
            Project
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            className="fa-solid fa-bars text-xl cursor-pointer"
            onClick={clickBar}
          ></i>
        )}

        {hamBurger || (
          <i
            className="fa-solid fa-xmark text-xl cursor-pointer"
            onClick={clickBar}
          ></i>
        )}
      </div>

      <ul
        className={`gap-4 ${
          !hamBurger ? "flex" : "hidden"
        } md:flex-row md:text-xl 2xl:text-2xl md:place-items-center text-white font-semibold md:flex nav-link top-[120%] absolute md:static md:bg-transparent md:w-auto p-4 md:p-0`}
      >
        <li>
          <NavLink
            to="/"
            onClick={changeBar}
            className="border-b-2 block md:border-none pb-2  md:p-0"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={changeBar}
            className="border-b-2 md:border-none block pb-2 md:p-0"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            onClick={changeBar}
            className="border-b-2 md:border-none pb-2 block md:p-0"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonial"
            onClick={changeBar}
            className="border-b-2 md:border-none pb-2 block md:p-0"
          >
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" onClick={changeBar} className="block">
            Project
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

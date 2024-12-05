// import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {

//   const clickBar = () => {
//     console.log(hamBurger);
//     setHamBurger(hamBurger ? false : true);
//   };

//   const changeBar = () => {
//     setHamBurger(true);
//   };

  return (
    <section className="bg-[#020F1F] md:py-5 py-3 md:px-4 sticky top-0 z-50 left-0">
      <div className="mx-auto lg:w-[80%] flex justify-between relative">
        <div className=" px-4 md:pl-0">
          <h1 className="sm:text-3xl text-[26px] 2xl:text-5xl font-bold logo text-[#00FFFF]">
            Portfolio
          </h1>
        </div>

        

        <Navbar />

        {/* <ul
          className={`gap-4 ${
            !hamBurger ? "flex" : "hidden"
          } md:flex-row md:text-xl 2xl:text-2xl md:place-items-center text-white font-semibold md:flex nav-link top-[120%] absolute md:static md:bg-transparent md:w-auto p-4 md:p-0`}
        >
        <li>
          <NavLink to="/" onClick={changeBar} className="border-b-2 block md:border-none pb-2  md:p-0" end>
            Home
          </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={changeBar} className="border-b-2 md:border-none block pb-2 md:p-0">About</NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={changeBar} className="border-b-2 md:border-none pb-2 block md:p-0">Education</NavLink>
          </li>
          <li>
            <NavLink to="/testimonial" onClick={changeBar} className="border-b-2 md:border-none pb-2 block md:p-0">Testimonial</NavLink>
          </li>
          <li>
            <NavLink to="/project" onClick={changeBar} className="block">Project</NavLink>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default Header;

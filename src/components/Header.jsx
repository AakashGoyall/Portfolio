import { useTheme } from "../context/Theme";
import Navbar from "./Navbar";
// import {useContext} from "react"

const Header = () => {
  const {isDark, themeToggle} = useTheme();

  return (
    <section className={`bg-[${isDark? "#020F1F" : "white" }] md:py-5 py-3 z-50 md:px-4 ${isDark? "sticky": "static"} top-0 left-0`}>
      <div className="mx-auto lg:w-[80%] flex justify-between relative">
        <div className=" px-4 md:pl-0">
          <h1 className={`sm:text-3xl text-[26px] 2xl:text-5xl cursor-pointer font-bold logo ${isDark? "text-[#00FFFF]": "text-[blue]"}`} onClick={themeToggle}>
            Portfolio
          </h1>
        </div>

        <Navbar />
      </div>
    </section>
  );
};

export default Header;

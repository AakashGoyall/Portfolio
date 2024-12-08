import { Link } from "react-router-dom";
import TypeAnimation from "../components/TypeAnimation";
import ImageSection from "../components/ImageSection";

import { useTheme } from "../context/Theme";


const Home = () => {
  const {bgChange, textChange, uniqueColor, isDark, blackToWhite} = useTheme();

  return (
    <section className={`${bgChange} md:py-3 py-7 min-h-[100dvh] max-h-[100%] px-7`}>
      <div className="mx-auto lg:w-[80%] flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 flex flex-col order-3  lg:mt-[120px] lg:order-1">
          <div className="font-bold">
            <h4 className={`${textChange} text-lg 2xl:text-2xl`}>Hi, I am</h4>
            <h1 className={`${textChange} text-4xl 2xl:text-6xl`}>Aakash Goyal</h1>
            <TypeAnimation uniqueColor={uniqueColor}
              data={["Web Developer", "Influencer", "Content Creator"]}
            />
          </div>

          <div className="my-4">
            <p className={`${textChange} text-lg 2xl:text-2xl selectable`}>
              Passionate web developer specializing in crafting responsive
              websites with intuitive user interfaces that deliver exceptional
              user experiences.
            </p>
          </div>

          <div className="flex gap-4 sm:flex-row flex-col text-[15px] 2xl:text-xl font-bold">
            <a href="ResumeOfAakash.pdf">
              <button style={{backgroundColor: uniqueColor, color: blackToWhite}} className="rounded-3xl py-[10px] px-7 sm:px-5 hover:bg-[#339f9f] text-[#020F1F]">
                Download CV
              </button>
            </a>
            <Link to="/contact">
              <button style={{border: `1px solid ${uniqueColor}`}} className={`${textChange} rounded-3xl py-2 px-9 sm:px-7`}>
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 order-2 mb-[25px] lg:mt-[75px]">
          <ImageSection src="./Home.png" isDark={isDark} />
        </div>
      </div>
    </section>
  );
};

export default Home;

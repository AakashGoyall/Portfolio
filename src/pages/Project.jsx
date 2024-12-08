import { useState } from "react";
import ProjectApi from "../api/projects.json";
import Heading from "../components/Heading";
import ProjectCards from "../components/ProjectCards";
import {useTheme} from "../context/Theme"

const Project = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const {bgChange, uniqueColor, blackToWhite, textChange, isDark} = useTheme();

  const addClass = (id) => {
    setHoveredId(id); // Set the hovered ID
  };

  const removeClass = () => {
    setHoveredId(null); // Reset hovered ID
  };

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (searchValue.length > 0) {
      const filteredResults = ProjectApi.filter((curElem) =>
        curElem.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      console.log(filteredResults); // Debugging
      setSearchResult(filteredResults); // Update state with filtered results
    } else {
      setSearchResult(ProjectApi); // Reset to full list if searchValue is empty
    }
  };

  return (
    <section className={`${bgChange} md:py-3 py-7 min-h-[100dvh] max-h-[100%] px-7`}>
      <div className="mx-auto lg:w-[80%]">
        <div className="text-center md:mt-16 mb-5 font-semibold">
          <Heading subHeading="My Portfolio" mainHeading="Recent Works" />
        </div>

        <form className="flex justify-end relative">
          <input
            type="text"
            placeholder="Search something..."
            style= {{boxShadow : isDark? undefined: "0px 0px 10px rgba(0, 0, 0, 0.3)"}}
            className={`${textChange} input pr-10`}
            onChange={handleInput}
            value={searchValue}
            spellCheck="false"
          />
          <button
            onClick={handleFormSubmit}
            style={{background: uniqueColor, color: blackToWhite}}
            className={`text-[18px] p-[4.5px] absolute hover:bg-[#339f9f] font-bold`}
          >
            Go
          </button>
        </form>

        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 mt-5 md:gap-8 gap-5">
          {(searchResult.length > 0 ? searchResult : ProjectApi).map(
            (curElem) => (
              <ProjectCards
                key={curElem.id} // Add a key for React rendering
                items={curElem}
                hoveredId={hoveredId}
                onMouseEnter={() => addClass(curElem.id)} // Pass ID to addClass
                onMouseLeave={removeClass}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Project;

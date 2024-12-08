import {useTheme} from "../context/Theme";
import {Link} from "react-router-dom";
const Error = () => {
  const {bgChange, uniqueColor, textChange} = useTheme();
  return (
    <section className={`${bgChange} p-3 px-7 h-[95vh]`}>
      <div className="mx-auto md:w-[60%] text-white flex flex-col text-center mt-[120px]">
        <h1 className="font-bold text-8xl md:text-[150px]" style={{color: uniqueColor}}>404</h1>
        <h2 className="font-bold text-md md:text-xl" style={{color: uniqueColor}}>
          Sorry! The page you were looking for could not be found.
        </h2>
        <p className={`${textChange} text-center my-3`}>
          You have been tricked into click on a link that can not be found.
          Please check the Url or go to main page and see if you can locate what
          you are looking for
        </p>
        <h3 className={`font-bold ${textChange}`}>
          <i class="fa-solid fa-play" style={{color: uniqueColor}}></i> Go to Portfolio's{" "}
          <Link
            to="/"
            style={{color: uniqueColor, borderBottom: `2px solid ${uniqueColor}`}}
          >Home</Link> page
        </h3>
      </div>
    </section>
  );
};

export default Error;

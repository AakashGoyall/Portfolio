import { useTheme } from "../context/Theme";

const Heading = ({subHeading, mainHeading}) => {

  const {textChange, uniqueColor} = useTheme();
  return (
    <>
        <h4 className={`text-lg 2xl:text-2xl ${textChange}`}>{subHeading}</h4>
        <h1 className="text-3xl 2xl:text-5xl" style={{color : uniqueColor}}>{mainHeading}</h1>
    </>
  );
};

export default Heading;

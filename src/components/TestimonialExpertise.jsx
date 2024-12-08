import {useState, useEffect} from "react";
import { useTheme } from "../context/Theme";

const TestimonialExpertise = ({title, percentage}) => {
  const [isValue, setIsValue] = useState(0);
  const {textChange, isDark} = useTheme();

  useEffect(() => {
      if (percentage >= isValue) {
          const timeout = setTimeout(() => {
              setIsValue(prevValue => prevValue + 1);
          }, 10); // Add delay for smooth incrementing
  
          return () => clearTimeout(timeout); // Cleanup timeout to avoid memory leaks
      }
  }, [percentage, isValue]); // Dependency array
  

  return (
    <>
      <div>
        <div className="flex justify-between md:pr-[5%]">
          <h5 className={`font-bold ${textChange}`}>{title}</h5>
          <h6 className={`font-bold ${textChange}`}>{percentage}%</h6>
        </div>
        <progress className={`${isDark? "progress-dark": "progress-light"} md:w-[95%] w-[100%]`} value={isValue} max="100"></progress>
      </div>
    </>
  );
};

export default TestimonialExpertise;

import {useState, useEffect} from "react";

const TestimonialExpertise = ({title, percentage}) => {
  const [isValue, setIsValue] = useState(0);

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
          <h5 className="font-bold">{title}</h5>
          <h6 className="font-bold">{percentage}%</h6>
        </div>
        <progress className="md:w-[95%] w-[100%] bg-[#00ffff]" value={isValue} max="100"></progress>
      </div>
    </>
  );
};

export default TestimonialExpertise;

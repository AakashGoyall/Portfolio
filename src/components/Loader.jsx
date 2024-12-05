import { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      setIsLoading(false); // Hide loader when the page is fully loaded
  }, []);

  return (
    <>
      <div className={`w-[100vw] ${isLoading? "flex": "hidden"} bg-[#020F1F] h-[100vh] place-items-center`}>
        <div className="m-auto animate-spin p-5 border-[8px] border-[#9f9f9f31] rounded-full border-b-8 border-b-[#00ffff]"></div>
      </div>
    </>
  );
};

export default Loader;

const Heading = ({subHeading, mainHeading}) => {
  return (
    <>
        <h4 className="text-lg 2xl:text-2xl">{subHeading}</h4>
        <h1 className="text-[#00FFFF] text-3xl 2xl:text-5xl">{mainHeading}</h1>
    </>
  );
};

export default Heading;

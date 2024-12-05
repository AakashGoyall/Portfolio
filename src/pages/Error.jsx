const Error = () => {
  return (
    <section className="bg-[#020F1F] p-3 px-7 h-[95vh]">
      <div className="mx-auto md:w-[60%] text-white flex flex-col text-center mt-[120px]">
        <h1 className="font-bold text-8xl md:text-[150px] text-[#00FFFF] ">404</h1>
        <h2 className="font-bold text-md md:text-xl text-[#00FFFF]">
          Sorry! The page you were looking for could not be found.
        </h2>
        <p className="text-center my-3">
          You have been tricked into click on a link that can not be found.
          Please check the Url or go to main page and see if you can locate what
          you are looking for
        </p>
        <h3 className="font-bold">
          <i class="fa-solid fa-play"></i> Go to Portfolio's{" "}
          <a
            href="/"
            className="text-[#00FFFF] border-b-[2px] border-[#00FFFF]"
          >Home</a> page
        </h3>
      </div>
    </section>
  );
};

export default Error;

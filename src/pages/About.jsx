import Heading from "../components/Heading";

const About = () => {
  return (
    <section className="bg-[#020F1F] md:py-3 py-7 min-h-[100dvh] max-h-[100%] px-7">
      <div className="mx-auto lg:w-[80%] flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 mb-[25px] lg:mt-[100px]">
          <img
            src="/About.png"
            alt="image"
            className="2xl:w-[330px] img"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col lg:mt-[90px]">
        <div className="font-bold">
          <Heading subHeading="My Intro" mainHeading="About Me"/>
        </div>

          <div className="my-4">
            <p className="text-lg 2xl:text-2xl selectable">
            I am a passionate and detail-oriented web developer with expertise in creating responsive and user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I specialize in building efficient, visually appealing interfaces that deliver seamless user experiences. My goal is to blend creativity and functionality to craft impactful digital solutions, always staying updated with the latest technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

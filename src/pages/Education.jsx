import Heading from "../components/Heading";
import EducationBox from "../components/EducationBox";

const Education = () => {
  return (
    <>
      <section className="bg-[#020F1F] md:py-3 py-7 min-h-[100dvh] max-h-[100%] px-7">
        <div className="mx-auto lg:w-[80%]">
          <div className="text-center md:mt-16 md:mb-12 mt-5 mb-7 font-semibold">
            <Heading subHeading="My Qualification" mainHeading="Awesome Journey"/>
          </div>

          <div className="flex md:flex-row flex-col gap-10">
            <div className="md:w-1/2 flex flex-col ">
              <h2 className="text-2xl font-bold text-center md:text-left text-[#00ffff]"><i className="fa-solid fa-graduation-cap"></i> Education</h2>

              <div className="mt-6 grid gap-6">
                <EducationBox mainHeading="Bachelor of Commerce Honours" subHeading="Commerce" date="2021 - 2025"/>
                <EducationBox mainHeading="Senior Higher Secondary School" subHeading="Commerce" date="2019 - 2021"/>
                <EducationBox mainHeading="Secondary School Certificate" subHeading="Studies" date="2018 - 2019"/>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col ">
              <h2 className="text-2xl text-center md:text-left font-bold text-[#00ffff]"><i className="fa-solid fa-book-open"></i> Certificate</h2>

              <div className="mt-6 grid gap-6">
                <EducationBox mainHeading="React Js Crash Course" subHeading="Udemy - Meta Brains" date="2024 - 2024"/>
                <EducationBox mainHeading="Web Development Wizardry" subHeading="Udemy - Zaid Smadi" date="2024 - 2024"/>
                <EducationBox mainHeading="Learn JavaScript Programming" subHeading="Udemy - Shubham Saurav" date="2024 - 2024"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
import Heading from "../components/Heading";
import TestimonialExpertise from "../components/TestimonialExpertise";
import {useTheme} from "../context/Theme"


const Testimonial = () => {
  const {bgChange} = useTheme();
  return (
    <section className={`${bgChange} md:py-3 py-7 min-h-[100dvh] max-h-[100%] px-7`}>
      <div className="mx-auto lg:w-[80%]">
        <div className="text-center md:mt-16 mb-12 font-semibold">
          <Heading subHeading="Why Choose Me" mainHeading="My Skills Area" />
        </div>

        <div className="md:grid-cols-2 grid md:gap-x-[4%] md:gap-y-[15%] gap-4">
          <TestimonialExpertise title="HTML" percentage="90"/>
          <TestimonialExpertise title="CSS" percentage="90"/>
          <TestimonialExpertise title="JavaScript" percentage="80"/>
          <TestimonialExpertise title="Tailwind CSS" percentage="80"/>
          <TestimonialExpertise title="React" percentage="75"/>
          <TestimonialExpertise title="GitHub" percentage="75"/>
          <TestimonialExpertise title="Python" percentage="60"/>
          <TestimonialExpertise title="Java" percentage="55"/>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

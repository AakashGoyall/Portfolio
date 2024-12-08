import {useState} from "react";
import Heading from "../components/Heading";
import ContactSources from "../components/ContactSources";
import {useTheme} from "../context/Theme"

const Contact = () => {
  const {bgChange, uniqueColor, blackToWhite, textChange,isDark} = useTheme();
  const apiKey = import.meta.env.VITE_FORMSPREE_API_KEY;
  const [data, setData] = useState({
    username: "",
    email: "",
    title: "",
    message: ""
  });

  const handleInput = (e) =>{
    const {name, value} = e.target;

    setData((prevData)=> ({
      ...prevData,
      [name]: value
    }));
  }


  const locationUrl = "https://maps.app.goo.gl/FMKJEXqJH6M96ujCA";
  const mail = "mailto:aakashgoyal950@gmail.com";
  const phone = "tel:8700275695";

  return (
    <section className={`bg-[#020F1F] md:py-3 py-7 min-h-[100dvh] max-h-[100%] px-7 ${bgChange}`}>
      <div className="mx-auto lg:w-[80%]">
        <div className="text-center md:mt-12  font-semibold mb-10">
          <Heading subHeading="Get in Touch" mainHeading="Contact Me" />
        </div>

        <div className="flex md:flex-row flex-col gap-10">
          <div className="md:order-2 flex flex-col md:gap-4 gap-3">
            <ContactSources link={phone} icon="fa-phone" title="Call Me" detail="870-027-5695" />
            <ContactSources link={mail} icon="fa-envelope" title="E-mail" detail="aakashgoyal950@gmail.com" />
            <ContactSources link={locationUrl} icon="fa-location-dot" title="Location" detail="Delhi, India" />
          </div>

          <div className="md:w-2/3 md:order-1">
            <form action={`https://formspree.io/f/${apiKey}`} method="POST">
              <div className="inputs-fields grid gap-5 mb-4">
                <div className="flex md:gap-[4%] flex-col md:flex-row gap-5">
                  <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    required
                    onChange={handleInput}
                    title="Name"
                  style= {{boxShadow : isDark? undefined: "0px 0px 10px rgba(0, 0, 0, 0.3)"}}

                    value= {data.username}
                    placeholder="Name"
                    name="username"
                    className={`${textChange} input md:w-[48%]`}
                  />
                  <input
                    type="email"
                    id="email"
                    value= {data.email}
                    autoComplete="off"
                    required
                    title="Email"
                    onChange={handleInput}
                   style= {{boxShadow : isDark? undefined: "0px 0px 10px rgba(0, 0, 0, 0.3)"}}

                    placeholder="Email"
                    name="email"
                    className= {`${textChange} input md:w-[48%]`}
                  />
                </div>
                <input
                  type="text"
                  id="title"
                  value= {data.title}
                  autoComplete="off"
                  title="Subject"
                  onChange={handleInput}
                  required
                  placeholder="Subject"
                  name="title"
                  style= {{boxShadow : isDark? undefined: "0px 0px 10px rgba(0, 0, 0, 0.3)"}}
                  className={`${textChange} input`}
                />
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  title="Message"
                  className={`${textChange} input`}
                  onChange={handleInput}
                  value= {data.message}
                  placeholder="Message"
                  cols="30"
                  style= {{boxShadow : isDark? undefined: "0px 0px 10px rgba(0, 0, 0, 0.3)"}}
                  rows="7"
                ></textarea>
              </div>

              <button style={{backgroundColor: uniqueColor, color: blackToWhite}}
                type="submit"
                className="rounded-3xl py-[10px] px-5 sm:px-5 font-bold hover:bg-[#339f9f]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

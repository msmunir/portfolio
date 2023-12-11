// import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/images/smunir.png";
import { Link } from "react-scroll";

const Home = () => {
  // Changing text after 3sec
  // const [text, setText] = useState("developer");
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setText((prevText) => (prevText === "developer" ? "coder" : "developer"));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-600"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center h-full px-4 gap-30 sm:gap-0">
        <div className="cardText flex flex-col justify-center items-center h-full gap-4">
          <div>
            <h2 className="mb-3 text-4xl sm:text-7xl font-bold text-white">
              {/* I am a {text} */}
              I'm a{" "}
              <span style={{ color: "darkseagreen" }}>
                <Typewriter
                  words={["Developer", "Coder"]}
                  loop={2}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              My current passion lies of developing web applilication by using
              cutting edge technoligies such as React, Tailwind, Bootstrap,
              NodeJs and MongoDB. I have experience on desing seamless user
              interfaces adn optimizing backend functionalities.
            </p>
          </div>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="cardImage ">
          <img
            src={HeroImage}
            alt="Profile image"
            className="rounded-s-full mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

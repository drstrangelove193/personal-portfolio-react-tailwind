import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-center"
    >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div>
          <h1 className="text-4xl sm:text-7xl font-bold">
            Giorgi <span className="text-teal-500">Oragvelidze</span>
          </h1>
          <h3 className="text-xl sm:text-3xl font-semibold text-gray-300 my-5">
            Web Developer
          </h3>

          <div className="flex flex-col justify-center items-center">
            <Link
              to="contact"
              smooth
              duration={800}
              className="group text-sm w-fit px-7 py-3 flex items-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 cursor-pointer"
            >Get in touch
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <FaArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

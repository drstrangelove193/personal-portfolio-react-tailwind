import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-[90%]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Motivated beginner web developer with strong desire to evolve into a
          proficient full-stack developer. I am passionate about creating
          user-centric web experiences that merge functionality with aesthetic
          appeal. My journey in the world of web development may not have begun
          long ago, but with my determination I will achieve remarkable things.
        </p>
        <br />

        <p className="text-xl">
          I am a quick learner, team player with a can-do attitude and
          independent initiative, creative and analytical thinking. Looking for
          an opportunity to grow my development skills in an innovative
          environment.
        </p>
      </div>
    </div>
  );
};
export default About;

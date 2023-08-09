import React from "react";
import barberShop from "../assets/portfolio/barber-shop.jpg"
import searchMe from "../assets/portfolio/searchme.png"
import library from "../assets/portfolio/library.jpg"
// portfolios array should add attribute: href with the links to demo and github repositories and then <a> tags 
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: barberShop,
      demoLink: "https://full-responsive-bootstrap-barbershop.netlify.app/",
      codeLink: "https://github.com/drstrangelove193/Fratelli-barber-shop"
    },
    {
      id: 2,
      src: searchMe,
      demoLink: "https://my-search-app-using-apis.netlify.app/",
      codeLink: "https://github.com/drstrangelove193/my-search-app"
    },
    {
      id: 3,
      src: library,
      demoLink: "https://library-flask-crud-app.onrender.com",
      codeLink: "https://github.com/drstrangelove193/Library-flask-crud-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg pt-40 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full bg-center rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                  Demo
                </a>
                <a href={codeLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

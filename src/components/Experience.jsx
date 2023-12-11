import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javaScript from "../assets/images/javaScript.png";
import react from "../assets/images/react.png";
import tailwindCSS from "../assets/images/tailwindCSS.png";
import bootstrap from "../assets/images/bootstrap.png";
import github from "../assets/images/github.png";
import github1 from "../assets/images/github1.png";
import sass from "../assets/images/sass.png";
import nodeJS from "../assets/images/nodeJS.png";
import mongoDB from "../assets/images/mongoDB.png";

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javaScript,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: tailwindCSS,
      title: "TailwindCSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: sass,
      title: "SaaS",
      style: "shadow-pink-500",
    },
    {
      id: 8,
      src: nodeJS,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black  w-full min-h-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            I have experience with working this technologies
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-2 px-12 sm:px-0">
          {techs.map((courses) => (
            <div
              key={courses.id}
              className={`card py-2 shadow-md hover:scale-105 duration-300 rounded-lg  flex justify-center items-center flex-col ${courses.style}`}
            >
              <img src={courses.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center">{courses.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

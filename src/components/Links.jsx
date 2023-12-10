import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Links() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/shahriar-munir-a76a5a141",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/msmunir",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:smunir07@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/public/cv.pdf",
      download: true,
    },
  ];

  return (
    // links always visible
    // <div className="flex flex-col top-[45%] left-0 fixed lg:top-[33%]">
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              link.style
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              download={link.download}
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

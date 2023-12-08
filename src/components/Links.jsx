import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Links() {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
              {/* Github <FaGithub /> */}
            </>
          </a>
        </li>
      </ul>
    </div>
  );
}

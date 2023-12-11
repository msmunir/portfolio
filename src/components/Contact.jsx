import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b7urnwa",
        "template_09uq6ib",
        form.current,
        "LCPCvPCP-7hCg_w7s"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-full md:h-screen p-4 sm:px-0"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full text-white text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Write me a message</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2 gap-3"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="bg-transparent border-2 rounded-md p-2 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="bg-transparent border-2 rounded-md p-2 text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              className="bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            {/* <input
              type="submit"
              value="Send"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md hover:scale-105 duration-300"
            /> */}
            {/* Let's Talk */}

            <button
              type="submit"
              value="Send"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md hover:scale-105 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

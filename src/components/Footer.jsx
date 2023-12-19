import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { links } from "../utils";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

	if(!form.current.name.value || !form.current.email.value || !form.current.message.value) {
		toast.error("Please fill all the fields");
		return;
	}

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent, I'll get back to you shortly");
        },
        (error) => {
          throw error;
        }
      )
      .catch((err) => {
        toast.error("Something went wrong, you can contact me on my linkedin");
      });

    form.current.reset();
  };

  return (
    <div className="sm:-mt-10 m-20 pb-20 mx-0 sm:mx-5 lg:mx-20 flex sm:items-center flex-col sm:flex-row">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="sm:w-1/2 text-xl sm:border-r border-neutral-700 px-10 py-5 lg:px-20"
      >
        <p>Full Name</p>
        <input
          name="name"
          className="text-2xl bg-transparent border-b border-neutral-300 w-full outline-none"
          type="text"
        />

        <p className="mt-5 sm:mt-10">E-mail</p>
        <input
          name="email"
          className="text-2xl bg-transparent border-b border-neutral-300 w-full outline-none"
          type="email"
        />

        <p className="mt-5 sm:mt-10">Message</p>
        <textarea
          name="message"
          className="text-2xl bg-transparent border-b border-neutral-300 w-full outline-none h-8"
        ></textarea>

        <button
          type="submit"
          className="mt-5 sm:mt-10 border border-neutral-500 rounded-full px-4 py-2 pt-1 bg-white bg-opacity-10 backdrop-blur-lg hover:border-neutral-200"
        >
          Contact Me
        </button>
      </form>

      <div className="sm:w-1/2 flex flex-col p-10 text-xl lg:text-2xl gap-6 break-words">
        <div>
          <h1 className="border-b w-fit pr-1">Contact</h1>
          <p className="text-2xl lg:text-3xl">pankajbeniwal3112@gmail.com</p>
        </div>

        <div>
          <h1 className="border-b w-fit pr-1">Based in</h1>
          <p className="text-2xl lg:text-3xl">Patiala, Punjab, India</p>
        </div>

        <button className="mt-5 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-lg sm:text-xl rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          <a href={links.resume}> Download Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Footer;

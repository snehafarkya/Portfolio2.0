import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.png";
import { Heading } from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rt2eg5b",
        "template_o0pigqt",
        form.current,
        "user_m0sMh3qvjp4HeTas3kAoH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Heading
        size="lg"
        as="h2"
        textDecoration="underline"
        textAlign={{}}
        fontFamily="Orbitron"
        letterSpacing="1px"
        color="white"
        className="md:mx-28 mx-6 mt-24"
        // marginTop="10"
        // className="p-4 md:mt-16 md:ml-8"
      >
        Contact Me
      </Heading>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 h-full ">
        <img src={contact} alt="" />
        <div class="exp-card block p-6 rounded-lg shadow-lg bg-white w-md md:w-3/5 m-4">
          <form ref={form} onSubmit={sendEmail}>
            <div class="form-group mb-6  ">
              <input
                type="text"
                class="form-control block
            w-full
            px-4
            py-3
            text-md
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2 border-solid border-gray-400
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="uname"
                placeholder="Name"
                name="from_name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block
            w-full
            px-4
            py-3
            text-md
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2 border-solid border-gray-400
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="umail"
                placeholder="Email address"
                name="email"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                class="
            form-control
            block
            w-full
            px-4
            py-3
            text-md
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-2 border-solid border-gray-400
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                id="textarea"
                rows="3"
                placeholder="Message"
                name="message"
              ></textarea>
            </div>
            <div class="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87"
                unselectable="false"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck87"
              >
                Knock on my Gmail Doors!
              </label>
            </div>
            <button
              type="submit"
              class="send-btn
          w-lg
          m-auto
          justify-center
          flex
          px-6
          py-2.5
          bg-blue-700
          text-white
          font-medium
          text-md
          text-center
          leading-tight
          rounded
          shadow-md
          "
          
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;

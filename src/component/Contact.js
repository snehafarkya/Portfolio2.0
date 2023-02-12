import React from "react";
import contact from "../assets/contact.png";
import { Heading } from "@chakra-ui/react";
export default function Contact() {
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
        className="md:mx-28 mx-6 mt-28"
        // marginTop="10"
        // className="p-4 md:mt-16 md:ml-8"
      >
        Contact Me
      </Heading>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 h-full ">
        <img src={contact} alt="" />
        <div class="exp-card block p-6 rounded-lg shadow-lg bg-white w-md md:w-3/5 m-4">
          <form >
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
                id="exampleInput7"
                placeholder="Name"
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
                id="exampleInput8"
                placeholder="Email address"
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
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
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
              class="
      w-lg
      m-auto
      justify-center
      flex
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-md
      leading-tight
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

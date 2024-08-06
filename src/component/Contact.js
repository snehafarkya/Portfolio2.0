import React, { useRef , useState} from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/myImg2.png";
import vector from "../assets/Vector.png";

import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import PrimaryButton from "./Globals/PrimaryButton";
import SecondaryButton from "./Globals/SecondaryButton";
// import Axios from 'axios';
const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_rt2eg5b",
  //       "template_o0pigqt",
  //       form.current,
  //       "user_m0sMh3qvjp4HeTas3kAoH"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // storing form data into mongodb
  const [nameS, setName] = useState("")
  const [roleS, setRole] = useState("")
  const [location, setLocation] = useState("")
  const [message, setMessage] = useState("")


  const handleSubmit = (e) => {
      e.preventDefault();
      // var namee = document.getElementById('name').value;
      // var role = document.getElementById('mail').value;
      // var loc = document.getElementById('loc').value;
      // var textarea = document.getElementById('textarea').value;

      // var thank = document.getElementById('thank').style.display = "flex"
      // var formm = document.getElementById('formm').style.display = "none"

      // console.log(namee , role , loc , textarea);

      // Axios.post('http://localhost:4000/insert', {
      //     fullName: nameS,
      //     email: roleS,
      //     location: location,
      //     msg: message,
      // })


  }
  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta
          name="description"
          content="This is the contact page of my portfolio. You can write an email to me and I will respond it."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Heading
        size="xl"
        as="h2"
        width="fit-content"
        fontFamily='Orbitron'
        paddingBottom="4px"
        letterSpacing='1px'
        marginX={{base:'24px',md:'120px'}}
        borderBottom="2px solid"
        borderBottomWidth="3px"
        marginBottom="20px"
        paddingX={{base:"16px",md:"4px"}}
        paddingTop={{base:'28', md:'0'}}
        className="text-white dark:text-[#18224b]"
      >
        Get In Touch🤝
      </Heading>
      <div className="grid grid-cols-1 place-items-center rounded-xl md:flex md:gap-16 md:justify-center md:items-center h-full  mx-auto">
      <div class="container md:flex hidden">
          <div className="flex gap-2 flex-col">
            <p className="text-5xl dark:text-[#18224b] text-white font-semibold">Got Something to say? Let's Chat</p>
            <p className="text-2xl dark:text-[#18224b] text-white font-medium">I am all ears!</p>
          </div>
        </div>
        <div class=" block p-6 rounded-lg shadow-lg bg-transparent dark:bg-[linear-gradient(#0a173f,#414c6e)] border w-md md:w-[450px] m-4">
          <form ref={form} onSubmit={handleSubmit} id="formm" className="flex flex-col justify-center">
            <div class="form-group mb-6  ">
              <input
                type="text"
                class="form-control block w-full px-4 py-3 text-md font-normal  text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100  border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="name"
                placeholder="Name"
                name="from_name"
                required
                onChange={(e) => {setName(e.target.value)}}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100   border-gray-400 rounded-xl  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                id="mail"
                placeholder="Email address"
                name="email"
                required
                onChange={(e) => {setRole(e.target.value)}}
              />
            </div>
            <div class="form-group mb-6  ">
              <input
                type="text"
                class="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100  border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="loc"
                placeholder="Where are you from?"
                name="from_name"
                required
                onChange={(e) => {setLocation(e.target.value)}}
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                class="form-control block w-full px-4 py-3 text-md font-normal text-[#18224b] bg-[linear-gradient(#dde5fa,#dadeec)] bg-clip-padding border-none backdrop-blur-md opacity-60 focus:opacity-100  border-gray-400 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                id="textarea"
                rows="3"
                placeholder="Message"
                name="message"
                required
                onChange={(e) => {setMessage(e.target.value)}}
              ></textarea>
            </div>
            <SecondaryButton
              type="submit"
              additionalClasses="w-20 mx-auto flex justify-center"
            >
              Send
            </SecondaryButton>
          </form>
          <div className="hidden " id="thank">
            <p>This means a lot 💜. Have a nice day!</p>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Contact;

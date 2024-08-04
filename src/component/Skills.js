import React from "react";
import { Heading } from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithubSquare,
  FaJsSquare,
  FaSass,
  FaJava,
  FaMicrosoft,
  FaNode,
  FaNpm,
  FaReact,
  FaPhp,
  FaPython,
  FaBitbucket,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiMysql,
  SiNotion,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
export default function Skills() {
  const data = [
    {
      icon: (
        <FaHtml5
          color="black"
          size="56"
          className="  z-50 h-12 p-1 flex justify-center items-center"
        />
      ),
      label: "5/5 HTML5",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <FaCss3Alt color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "5/5 CSS3",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <FaBootstrap color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 BootStrap",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: <FaReact color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 React Js",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: <FaJsSquare color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 JavaScript",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: (
        <FaGithubSquare color="black" size="56" className="  z-50 h-12 p-1" />
      ),
      label: "5/5 GitHub",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <FaSass color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 Sass",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: <SiNotion color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "5/5 Notion",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <FaMicrosoft color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "5/5 Microsoft",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <FaNode color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "3/5 Node",
      opacity: "158px",
      rating: 3,
    },
    {
      icon: <FaNpm color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 Npm",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: <SiWordpress color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "5/5 HTML5",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: (
        <SiTailwindcss color="black" size="56" className="  z-50 h-12 p-1" />
      ),
      label: "5/5 HTML5",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <SiNetlify color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 Netlify",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: <SiNextdotjs color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "4/5 Next Js",
      opacity: "210px",
      rating: 4,
    },
    {
      icon: <SiMysql color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "3/5 MySql",
      opacity: "158px",
      rating: 3,
    },
    {
      icon: (
        <IoLogoVercel color="black" size="56" className="  z-50 h-12 p-1" />
      ),
      label: "5/5 Vercel",
      opacity: "263px",
      rating: 5,
    },
    {
      icon: <FaBitbucket color="black" size="56" className="  z-50 h-12 p-1" />,
      label: "5/5 BitBucket",
      opacity: "263px",
      rating: 5,
    },
  ];
  return (
    <div className="md:p-4 px-6 mt-10 md:mt-16">
      <Heading
        size="lg"
        as="h2"
        textDecoration="underline"
        textAlign={{}}
        fontFamily="Orbitron"
        letterSpacing="1px"
        color="white"
        className='text-white dark:text-[#18224b]'
      >
        Professional Skill Set
      </Heading>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-10 md:py-20 py-10 place-items-center">
        {data.map((item, index) => {
          const fillWidth = `${(item.rating / 5) * 100 - 6}%`;
          return (
            <div
              key={index}
              className="w-80 bg-white/50 dark:bg-[#18224b92] group transition ease-in-out duration-700 h-14 rounded-3xl z-10 relative flex items-center"
            >
              <div
                className="bg-fill absolute left-5  h-14  rounded-e-3xl rounded-s-md transition-all ease-in-out duration-700 group-hover:w-full"
                style={{ "--fill-width": fillWidth }}
              ></div>
              <div
                className="rounded-3xl h-14 transition-all ease-in-out duration-700 absolute flex items-center bg-[#dadeec] w-fit"
                style={{ transform: "translateX(0)" }}
              >
                {item.icon}
              </div>
              <p className="text-center flex justify-center items-center mx-auto group-hover:text-black skillbtnfill left-20 text-xl group-hover:scale-[1.03] font-bold">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

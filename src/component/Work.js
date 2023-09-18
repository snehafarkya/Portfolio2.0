import React from "react";
import work from "./WorkInfo";
import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

export default function Work() {
  const workData = work.map((item) => {
    return (
      
      <><Helmet>
    <title>Work page</title>
    <meta name="description" content="This is the work page of my portfolio. As a frontend developer, this page contains my work." />
    <link rel="canonical" href="/work" />
 </Helmet>
        <div class="containerr">
          <div class="card">
            <div class="image">
              <a href={item.link} target="_blank">
                <img src={item.image} />
              </a>
            </div>
            <div class="content">
              <h3 className="con-head font-bold">{item.title}</h3>
              <p className="text-sm text-justify font-semibold text-left py-2">
                {item.desc}
              </p>
              <button className="github-btn my-5 mb-6 p-2 rounded-md text-sm text-white bg-blue-700">
                <a href={item.link}>View it on Github</a>
              </button>
              {item.tags.map((tags) => {
                return (
                  <>
                    <div className="flex gap-1 justify-center">
                      <button className="bg-gray-200 p-1 px-2 mx-2 text-xs rounded-md hover:border-blue-500 border-2 border-blue-900">
                        {tags.one}
                      </button>
                      <button className="bg-gray-200 p-1  px-2 mx-2 text-xs rounded-md hover:border-blue-500 border-2 border-blue-900">
                        {tags.two}
                      </button>
                      <button className="bg-gray-200 p-1  px-2 mx-2 text-xs rounded-md hover:border-blue-500 border-2 border-blue-900">
                        {tags.three}
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="md:mx-28">
      <Heading
              size="xl"
              as="h2"
              width="fit-content"
              textAlign={{}}
              fontFamily='Orbitron'
              paddingBottom="4px"
              letterSpacing='1px'
              borderBottom="2px solid"
              borderBottomWidth="3px"
              textColor="white"
              marginBottom="20px"
              paddingX={{base:"16px",md:"4px"}}

            >
              Projects ✨
            </Heading>
      <Heading
        as="h2"
        size="lg"
        color="white"
        fontFamily="Orbitron"
        letterSpacing="1px"
        fontWeight="bold"
        className="flex flex-wrap px-4 text-left md:justify-center pb-20"
      >
        {" "}
        As an &nbsp;
        <span style={{ color: "#1A165C ", fontWeight: "bold" }}>
          {" "}
          Open Source enthusiast,{" "}
        </span>
        these are some of my projects.
      </Heading>
      <div className="grid md:grid-cols-3 grid-cols-1  ">
        {workData}
      </div>
      <div class="text-center py-4 lg:px-4 w-max m-auto mt-20">
        <div
          class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="pl-3 font-semibold mr-2 text-left flex-auto text-gray-400">
            See more projects <a href="https://www.github.com/snehafarkya" className="moreWorkLink text-gray-100 ">here</a>
          </span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

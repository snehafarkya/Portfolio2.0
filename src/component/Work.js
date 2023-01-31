import React from "react";
import work from "./WorkInfo";
import { Heading } from "@chakra-ui/react";
export default function Work() {
  const workData = work.map((item) => {
    return (
      <>
        <div class="containerr">
          <div class="card">
            <div class="image">
              <a href={item.link} target='_blank'>
              <img  src={item.image} /></a>
            </div>
            <div class="content">
              <h3 className="con-head">{item.title}</h3>
              <p className="text-sm font-semibold text-left py-2">
                {item.desc}
              </p>
              <button className="github-btn mb-3 p-2 rounded-md text-sm text-white bg-blue-700" ><a href={item.link}>View it on Github</a></button>
              {item.tags.map((tags)=>{
        return <>
        <div className="flex gap-1 justify-center">
        <button className='bg-blue-300 p-1 px-2 mx-2 text-xs rounded-lg hover:border-blue-500 border-2 border-blue-900'>{tags.one}</button>
        <button className='bg-blue-300 p-1  px-2 mx-2 text-xs rounded-lg hover:border-blue-500 border-2 border-blue-900'>{tags.two}</button>
        <button className='bg-blue-300 p-1  px-2 mx-2 text-xs rounded-lg hover:border-blue-500 border-2 border-blue-900'>{tags.three}</button>
        </div>
        </>
      })}
            </div>
          </div>
        </div>
        {/* <div class="flex justify-center ">
  <div class="work-card rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg hover:rounded-t-2xl" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
      <p class="text-gray-700 text-base mb-4">
        {item.desc}
      </p>
    {item.tags.map((tags)=>{
        return <>
        <button className='bg-gray-300 p-1 px-2 mx-2'>{tags.one}</button>
        <button className='bg-gray-300 p-1  px-2 mx-2'>{tags.two}</button>
        <button className='bg-gray-300 p-1  px-2 mx-2'>{tags.three}</button>
        
        </>
      })}
    </div>
  </div>
</div> */}
      </>
    );
  });
  return (
    <div>
      <Heading as="h2" size="lg" color="white" fontFamily= 'Orbitron' letterSpacing='1px' fontWeight="bold" className="flex flex-wrap px-4 text-left md:justify-center">
              {" "}
              As an  &nbsp;
              <span style={{ color: "#1A165C ", fontWeight: "bold" }}>
                {" "} 
                Open Source enthusiast, {" "}
              </span>
               these are some of my projects.
            </Heading>
      <div className="grid md:grid-cols-3 grid-cols-1  place-items-center ">
        {workData}
      </div>
      <div class="bg-indigo-900 text-center py-4 lg:px-4 w-max m-auto mt-20">
          <div
            class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              New
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              See more projects<a href="https://www.github.com/snehafarkya"> here</a>
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

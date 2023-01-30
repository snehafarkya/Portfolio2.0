import React from "react";
import work from "./WorkInfo";
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
                DIn publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
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
      <div className="grid md:grid-cols-3 grid-cols-1  place-items-center ">
        {workData}
      </div>
    </div>
  );
}

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react";
import hero from "../assets/heroimg.png";
import { Helmet } from "react-helmet-async";
export default function Hero() {
  return (
 <> <Helmet>
    <title>Sneha Farkya Portfolio</title>
    <meta name="description" content="This is the home page of my portfolio. It contains my designation and all the other internal links to my portfolio." />
    <link rel="canonical" href="/" />
 </Helmet>
 {/* banner for work */}
    <div className="bannerr justify-center w- flex ">
<div id="sticky-banner" tabindex="-1" class="openForRole z-50 rounded-full mx-2 flex justify-between w-max p-2 md:p-4 border bg-[#271464]" style={{ boxShadow:
      "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)" }}>
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-white">
            <span class="inline-flex p-1 mr-2 bg-white rounded-full ">
                <svg class="w-4 h-4 text-white" fill="#271464" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                </svg>
                <span class="sr-only">Light bulb</span>
            </span>
            <span>Actively looking for <p class="inline font-medium text-blue-600 underline dark:text-blue-300 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline hover:cursor-pointer">Frontend developer</p> and <p class="inline font-medium text-blue-600 underline dark:text-blue-300 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline hover:cursor-pointer">Technical writer</p> role. </span>
        </p>
    </div>
</div>
</div>
<div
      className="herosec grid grid-cols-1 md:grid-cols-2 md:gap-10 place-items-center "
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "auto auto",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   gap: "10em",
        
      // }}
    >
      <div className="hero-content order-last md:order-first">
        <Card w={{md:'xl'}} m="auto" background="transparent" className="w-lg ">
          <CardHeader>
            <Heading as="h2" size="xl" color="white" fontWeight="bold" fontFamily={"Orbitron,sans-serif"}>
              {" "}
              I'm Sneha Farkya,
              <span style={{ color: "#FE74FF", fontWeight: "bold" }}>
                {" "}
                Front-end Developer and{" "}
              </span>
              Technical Writer.
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white" >
            Hey, Namaste, Konnichiwa! I am Sneha from Indore, India. I have 1.5+ years of experience developing beautiful User-friendly Digital Experiences that makes sense.  
            </Text>
          </CardBody>
          <CardFooter>
            <button className="btn-prim" background="transparent">
              <a href="/about"> Know more about me</a>
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className="hero-img imageee">
        <img src={hero} alt="" />
      </div>
    </div>
    </>
  );
}

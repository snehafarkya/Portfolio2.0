import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Button,
  Heading,
  Container,
} from "@chakra-ui/react";
import hero from "../assets/heroimg.png";
import myImg from "../assets/profile.jpg";

import { Helmet } from "react-helmet-async";
import SecondaryButton from "./Globals/SecondaryButton";
import Calendly from "./Globals/Calendly";
import Newexp from "./Newexp";
import About from "./About";
export default function Hero() {
  return (
    <>
      {" "}
      <Helmet>
        <title>Sneha Farkya Portfolio</title>
        <meta
          name="description"
          content="This is the home page of my portfolio. It contains my designation and all the other internal links to my portfolio."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div
        className="herosec grid grid-cols-1 md:gap-10 md:my-8 md:mt-16 place-items-center "
      >
        <div className=" order-last md:order-first">
          <Card
            w={{ md: "3xl" }}
            m="auto"
            background="transparent"
            border={"none"}
            shadow={"none"}
            className="w-lg shadow-none flex justify-center items-center flex-col border-none"
          >
            <CardHeader className="text-center">
              <Heading
                as="h2"
                size="2xl"
                className=" dark:text-[#18244b] text-white"
                fontWeight="bold"
                letterSpacing={"wide"}
                fontFamily={"Orbitron,sans-serif"}
              >
                {" "}
                I'm Sneha Farkya,
                <span
                  style={{
                    color: "#FE74FF",
                    fontWeight: "bold",
                    fontSize: "28px",
                  }}
                >
                  {" "}
                  <br />
                  Front-end Developer and Technical Writer.
                </span>
              </Heading>
            </CardHeader>
            <CardBody>
              <div className=" w-fit flex gap-8 justify-center p-2 border dark:border-[#18244b] rounded-xl items-center">
              <Image
              // objectFit="cover"
              // maxW={{ base: '100%', sm: '200px' }}
              src={myImg}
              alt="Sneha Farkya"
              height={{base:'auto', md:'200px'}}
              width="200px"
              // paddingX="16px"
              className=" myimage "
              justifyContent={{ sm: "center" }}
              // border='1px'
            />
              <Text className="dark:text-[#18244b] text-white" textAlign={"left"}>
                Hello and Namaste! I’m Sneha from Indore,
                India. With over 2 years of experience, I specialize in
                developing user-friendly digital experiences that blend
                functionality with aesthetic appeal. My passion lies in crafting
                beautiful and intuitive interfaces, making complex ideas
                accessible and engaging. <br />{" "}
                <b>Welcome to my space where creativity meets technology!</b>
              </Text>
              </div>
            </CardBody>
            <CardFooter className="flex justify-center items-center gap-4">
              <SecondaryButton additionalClasses="dark:bg-[linear-gradient(40deg,#ffffff,#c8d2ee)]" href={"/about"} text={"Know more about me"} />
              <Calendly/>
            </CardFooter>
          </Card>
          <About/>
        </div>
        {/* <div className="hero-img imageee pt-28 md:pt-0">
        <img src={hero} alt=""  />
      </div> */}
      </div>
    </>
  );
}

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
        <Card w={{md:'xl'}} m="auto" background="transparent" border={"none"} shadow={"none"} className="w-lg shadow-none border-none">
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

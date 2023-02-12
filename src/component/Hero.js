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
export default function Hero() {
  return (
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
      <div className="hero-img">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

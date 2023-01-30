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
      className="herosec"
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "10em",
        
      }}
    >
      <div className="hero-content">
        <Card w="xl" m="auto" background="transparent">
          <CardHeader>
            <Heading as="h2" size="2xl" color="white" fontWeight="bold">
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
            <Text color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              officia cupiditate modi cum necessitatibus aspernatur commodi quod
              quos consequuntur, id tempore sit ipsam animi beatae debitis amet
              dolores eveniet dolorum.
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

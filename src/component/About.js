import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import myImg from "../assets/myImg.jpeg";
import Skills from "./Skills";
import Experience from "./Experience";
import { Helmet } from "react-helmet-async"; 

export default function About() {
  return (
    <><Helmet>
    <title>About page</title>
    <meta name="description" content="This is the about page of my portfolio. It contains the information about me, the skills I have and the experience of my work." />
    <link rel="canonical" href="/about" />
 </Helmet>
    <div className="w-xl  md:mx-28 ">
      <section className="bg-section">
      <Card
        className="md:flex w-xl md:gap-40 mt-16 grid gap:20 grid-rows-2 justify-center "
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        // variant='outline'
        border='none'
        background="transparent"
        color="white"
      >
        <Stack className=" bg-transparent order-last md:order-first">
          <CardBody>
            <Heading
              size="lg"
              as="h2"
              textDecoration="underline"
              textAlign={{}}
              fontFamily='Orbitron'
              letterSpacing='1px'
            >
              About Me
            </Heading>

            <Text py="4" letterSpacing="1px">
              Great to see you here! I am Sneha Farkya, a BCA graduate from Medi-Caps University, Indore. I am a Frontend Developer and Technical Writer. 
              <br />
              <br />
              In my role as a Front-end developer, I combine technical expertise with creativity. My passion for designing and developing user-friendly web applications has lead me to sharpen my skills in HTML, CSS, and JavaScript to provide dynamic, responsive user interfaces.
              <br />
              <br />
              I have participated in several hackathons and built several projects, demonstrating my ability to write concise and clean code, and document the project Recently, I participated in the SheBuilds hackathon and got a special mention by organizers.
              <br />
              
             </Text>
          </CardBody>

          <CardFooter>
            <button
              variant="solid"
              className="btn-res "
              style={{ marginTop: "-25px" }}
            >
              <a href="mailto:snhafarkya@gmail.com">Hire Me</a>
            </button>
          </CardFooter>
        </Stack>
        <Image 
          objectFit="cover"
          // maxW={{ base: '100%', sm: '200px' }}
          src={myImg}
          marginTop="4"
          alt="Sneha Farkya"
          height="400px"
          width="400px"
          paddingX="16px"
          borderRadius="6px"
          justifyContent={{sm:"center"}}
          // border='1px'
        />
      </Card>
      </section>
      <Skills/>
      <Experience/>
    </div>
    </>
  );
}

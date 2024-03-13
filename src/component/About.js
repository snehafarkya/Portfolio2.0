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
import myImg from "../assets/profile.jpg";
import Skills from "./Skills";
import Experience from "./Experience";
import "../App.css";
import { Helmet } from "react-helmet-async";
import { PopupButton } from "react-calendly";
import Newexp from "./Newexp";
// import Calendly from 'react-calendly'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About page</title>
        
        <meta
          name="description"
          content="This is the about page of my portfolio. It contains the information about me, the skills I have and the experience of my work."
        />
        <link rel="canonical" href="/about" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <div className="w-xl border-none md:mx-28 ">
        {/* <section className="bg-section border-none"> */}
          <Heading
            size="xl"
            as="h2"
            width="fit-content"
            textAlign={{}}
            fontFamily="Orbitron"
            paddingBottom="4px"
            letterSpacing="1px"
            borderBottom="2px solid"
            borderBottomWidth="3px"
              marginX={{base:'24px',md:'0px'}}
              textColor="white"
            paddingX={{ base: "16px", md: "4px" }}
            paddingTop={{base:'28', md:'0'}}
          >
            About Me 👩‍💻
          </Heading>
          <Card
            className="md:flex w-xl md:gap-40 md:mt-8 mt-6 grid gap:20 grid-rows-2 justify-center border-none"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            // variant='outline'
            border="none"
            background="transparent"
            color="white"
            shadow={"none"}

          >
            <Stack className=" bg-transparent order-last md:order-first">
              <CardBody>
                <Text py="4" letterSpacing="1px">
                  Great to see you here! I am Sneha Farkya, Frontend Developer and
                  Technical Writer indulge in creating smooth User Interfaces. As a BCA graduate from Medicaps University, India, I have acquired a strong computer science foundation and honed my front-end developer skills. 
                  <br />
                  <br />
                  As a developer, my foremost responsiblity is to understand the requirement and do the needful research to generate positive outcome. Over the months, I have upskilled myself, be it learning or implementing highly scalable code.
                  <br />
                  <br />
                  Not only that, I have participated in several hackathons and built several
                  projects, demonstrating my ability to write concise and clean
                  code, and document the project. One of my achievement was when I participated in the
                  SheBuilds hackathon and got a special mention by organizers.
                  <br />
                </Text>
              </CardBody>

              <CardFooter>
                {/* <a href="mailto:snhafarkya@gmail.com">Hire Me</a> */}

                {/* <!-- Calendly link widget begin --> */}
                <PopupButton
                  url="https://calendly.com/snhafarkya/introductory-call"
                  rootElement={document.getElementById("root")}
                  text="Set up a call!"
                  variant="solid"
                  className="btn-res "
                  style={{ marginTop: "-25px" }}
                  pageSettings={{
                    backgroundColor: "grey",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "#b101b6",
                    textColor: "#b101b6",
                  }}
                />
              </CardFooter>
            </Stack>
            <Image
              objectFit="cover"
              // maxW={{ base: '100%', sm: '200px' }}
              src={myImg}
              marginTop="4"
              marginRight={8}
              alt="Sneha Farkya"
              height={{base:'auto', md:'400px'}}
              width="-moz-fit-content"
              // paddingX="16px"
              borderRadius="full"
              className=" hover:border-[10px] mx-4 md:mx-0 hover:ease-in-out border-transparent   hover:duration-400 myimage "
              justifyContent={{ sm: "center" }}
              // border='1px'
            />
          </Card>
        {/* </section> */}
        <Skills />
        {/* <Experience/> */}
        <Newexp />
      </div>
    </>
  );
}

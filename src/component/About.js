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
export default function About() {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              doloribus molestias minus maiores laborum aspernatur placeat, quis
              assumenda. Amet, eos.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              sapiente blanditiis minima quaerat ad officia quo molestiae?
              Ipsam, distinctio optio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, nobis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              sapiente blanditiis minima quaerat ad officia quo molestiae?
              Ipsam, distinctio optio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, nobis.
              <br />
             </Text>
          </CardBody>

          <CardFooter>
            <button
              variant="solid"
              className="btn-res "
              style={{ marginTop: "-25px" }}
            >
              Buy Latte
            </button>
          </CardFooter>
        </Stack>
        <Image
          objectFit="cover"
          // maxW={{ base: '100%', sm: '200px' }}
          src={myImg}
          marginTop="4"
          alt="Caffe Latte"
          height="400px"
          width="400px"
          paddingX="16px"
        />
      </Card>
      </section>
      <Skills/>
      <Experience/>
    </div>
  );
}

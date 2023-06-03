import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
// import { ReactComponent as Logo } from "../crown.svg";
// import Logo from '../logo.svg'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} background="transparent">
      <h1 style={{ color: "white", fontWeight: "bold", letterSpacing: "2px" }}>
        <a href="/">
        Sneha Farkya
        </a>
      </h1>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}  _hover={{
      textDecoration: 'none',}}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={10}
        letterSpacing={2}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        color="white"
      >
        <MenuItem to="/" className="nav-link">
          Home
        </MenuItem>
        <MenuItem to="/about" className="nav-link">
          {" "}
          About Me
        </MenuItem>
        <MenuItem to="/blogs" className="nav-link">
          {" "}
          Blogs{" "}
        </MenuItem>
        <MenuItem to="/work" className="nav-link">
          {" "}
          Work{" "}
        </MenuItem>
        <MenuItem to="/contact" className="nav-link">
          {" "}
          Contact{" "}
        </MenuItem>

        {/* <MenuItem to="/pricing"> Contact Me </MenuItem> */}
        <MenuItem isLast >
          <a
            href="https://drive.google.com/drive/folders/1oF7zEMqOOv109R2ECOahu0zUh8-ATmN1?usp=sharing"
            target={"_blank"}
          >
            <button className="btn-res" style={{ background: "transparent" }}>
              Resume
            </button>
          </a>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text fontSize="lg" fontWeight="Bold">
        {" "}
        Dresshify
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

import { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  HStack,
  Show,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import ModeSwitch from "./ModeSwitch";
import Sidebar from "./Sidebar";

const TopBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgSideBar = useColorModeValue("#202123", "#202123");
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
  return (
    <HStack justifyContent="space-between" justify="center">
      <Show below="md">
        <Button colorScheme="none" onClick={onOpen}>
          <GiHamburgerMenu color="white" />
        </Button>
      </Show>
      <Show above="md">
        <Container w="120px" />
      </Show>
      <Spacer />
      <Text
        fontSize={currentBreakpoint === "md" ? "4xl" : "2xl"}
        fontWeight="bold"
        color="#FFFFFF"
      >
        AkinatorGPT
      </Text>
      <Show below="md">
        <Box boxSize="48px" />
      </Show>
      <Spacer />
      <Show above="md">
        <Container width="fit-content">
          <ModeSwitch />
        </Container>
      </Show>

      {/* Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bgSideBar} maxW="250px">
          <Sidebar />
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default TopBar;

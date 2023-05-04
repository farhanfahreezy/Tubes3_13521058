import {
  Box,
  Button,
  Container,
  HStack,
  Show,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import ModeSwitch from "../ModeSwitch";

interface TopBarProps {
  onOpen: () => void;
}

const TopBar = ({ onOpen }: TopBarProps) => {
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
      {/* <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bgSideBar} maxW="250px">
          <Sidebar
            selectedId={selectedIndex}
            handleSelectList={handleSelectList}
            selectedVal={selectedAlgorithm}
            handleChage={handleSelectedAlgorithm}
            switchChatHistory={switchChatHistory}
            historyList={historyList}
            addHistoryList={addHistoryList}
          />
        </DrawerContent>
      </Drawer> */}
    </HStack>
  );
};

export default TopBar;

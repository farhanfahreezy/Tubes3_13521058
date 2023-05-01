import { HStack, Show, Spacer, Text } from "@chakra-ui/react";
import ModeSwitch from "./ModeSwitch";

const TopBar = () => {
  return (
    <HStack justifyContent="space-between" padding={3} justify="center">
      <Spacer />
      <Text fontSize="4xl" fontWeight="bold" color="#FFFFFF">
        AkinatorGPT
      </Text>
      <Spacer />
      <Show above="md">
        <ModeSwitch />
      </Show>
    </HStack>
  );
};

export default TopBar;

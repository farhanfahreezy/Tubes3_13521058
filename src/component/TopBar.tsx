import { Container, HStack, Show, Spacer, Text } from "@chakra-ui/react";
import ModeSwitch from "./ModeSwitch";

const TopBar = () => {
  return (
    <HStack justifyContent="space-between" marginBottom={1} justify="center">
      <Spacer />
      <Text fontSize="4xl" fontWeight="bold" color="#FFFFFF">
        AkinatorGPT
      </Text>
      <Spacer />
      <Show above="md">
        <Container width="fit-content">
          <ModeSwitch />
        </Container>
      </Show>
    </HStack>
  );
};

export default TopBar;

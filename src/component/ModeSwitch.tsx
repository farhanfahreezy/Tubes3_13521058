import {
  Container,
  HStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const switchColor = useColorModeValue("yellow.500", "blue.700");

  return (
    <HStack
      bg={switchColor}
      padding={1}
      paddingRight={3}
      paddingLeft={3}
      borderRadius={3}
      w="120px"
    >
      <Container w="50x" mt="-1px" alignItems="center" px="1">
        <Text
          color="white"
          fontWeight={colorMode === "dark" ? "semibold" : "bold"}
        >
          {colorMode === "dark" ? "Night" : "Day"}
        </Text>
      </Container>
      <Switch
        colorScheme="blue"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ModeSwitch;

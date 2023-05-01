import {
  HStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Text mt="15px" color="#FFFFFF">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ModeSwitch;

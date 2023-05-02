import {
  Box,
  useColorModeValue,
  Text,
  Container,
  HStack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import React from "react";

interface ChatProps {
  sender: number;
  text: string;
}

const BubbleChat = ({ sender, text }: ChatProps) => {
  const bgUser = useColorModeValue("#FFFFFF", "#343541");
  const bgBot = useColorModeValue("#F7F7F8", "#444654");
  return (
    <>
      <HStack
        bg={sender === 0 ? bgBot : bgUser}
        w="100%"
        h="fit-content"
        padding={5}
        justifyContent="space-between"
      >
        <Box boxSize="80px">
          {sender === 0 && (
            <Image
              boxSize="80px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          )}
        </Box>
        <Text>{text} </Text>
        <Box boxSize="80px">
          {sender === 1 && (
            <Image
              boxSize="80px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          )}
        </Box>
      </HStack>
    </>
  );
};

export default BubbleChat;

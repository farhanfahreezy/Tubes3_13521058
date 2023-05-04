import { Box, useColorModeValue, Text, HStack, Image } from "@chakra-ui/react";
import akinatorLogo from "../assets/img/akinatorLogo.png";
import userLogo from "../assets/img/userLogo.png";

interface ChatProps {
  sender: number;
  text: string;
  index: number;
}

const BubbleChat = ({ sender, text, index }: ChatProps) => {
  const bgUser = useColorModeValue("#FFFFFF", "#343541");
  const bgBot = useColorModeValue("#F7F7F8", "#444654");
  return (
    <>
      <HStack
        key={index}
        bg={sender === 0 ? bgBot : bgUser}
        w="100%"
        h="fit-content"
        padding={5}
        justifyContent="center"
        alignItems="top"
      >
        <Box
          boxSize="50px"
          borderRadius={5}
          overflow="hidden"
          boxShadow={sender === 0 ? "lg" : ""}
        >
          {sender === 0 && (
            <Image
              boxSize="50px"
              objectFit="cover"
              src={akinatorLogo}
              border="0px"
            />
          )}
        </Box>
        <Text
          w="calc(100% - 120px)"
          textAlign={sender === 0 ? "left" : "right"}
          wordBreak="break-word"
          padding={3}
        >
          {text}
        </Text>
        <Box
          boxSize="50px"
          bg={bgBot}
          borderRadius={5}
          overflow="hidden"
          boxShadow={sender === 1 ? "lg" : ""}
        >
          {sender === 1 && (
            <Image
              boxSize="50px"
              objectFit="cover"
              src={userLogo}
              border="0px"
            />
          )}
        </Box>
      </HStack>
    </>
  );
};

export default BubbleChat;

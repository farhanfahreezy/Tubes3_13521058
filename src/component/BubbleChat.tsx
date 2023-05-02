import {
  Box,
  useColorModeValue,
  Text,
  Container,
  HStack,
  Image,
} from "@chakra-ui/react";
import akinatorLogo from "../img/akinatorLogo.png";
import userLogo from "../img/userLogo.png";

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
      >
        <Box boxSize="80px">
          {sender === 0 && (
            <Image boxSize="80px" objectFit="cover" src={akinatorLogo} />
          )}
        </Box>
        <Container w="calc(100% - 200px)">
          <Text
            maxW="100%"
            textAlign={sender === 0 ? "left" : "right"}
            wordBreak="break-word"
            verticalAlign="top"
          >
            {text}{" "}
          </Text>
        </Container>
        <Box boxSize="80px" bg={bgBot}>
          {sender === 1 && (
            <Image boxSize="80px" objectFit="cover" src={userLogo} />
          )}
        </Box>
      </HStack>
    </>
  );
};

export default BubbleChat;

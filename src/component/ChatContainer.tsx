import { Button, Container } from "@chakra-ui/react";
import BubbleChat from "./BubbleChat";

const ChatContainer = () => {
  const dummyChat = [
    { sender: 0, text: "Halo apakah kamu gay" },
    { sender: 1, text: "Halo apakah kamu gay" },
    { sender: 0, text: "Halo apakah kamu gay" },
    { sender: 1, text: "Halo apakah kamu gay" },
    { sender: 0, text: "Halo apakah kamu gay" },
    { sender: 1, text: "Halo apakah kamu gay" },
  ];
  return (
    <Container
      h="100%"
      w="100%"
      overflowY="scroll"
      overflowX="hidden"
      sx={{
        "&::-webkit-scrollbar": {
          width: "6px",
          // transition: "opacity 0.2s ease-in-out",
        },
        "&::-webkit-scrollbar:hover": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.300",
          borderRadius: "md",
        },
        position: "relative",
        zIndex: "2",
      }}
    >
      {dummyChat.map((item) => (
        <BubbleChat sender={item.sender} text={item.text}></BubbleChat>
      ))}
    </Container>
  );
};

export default ChatContainer;

import {
  Button,
  Container,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import BubbleChat from "./BubbleChat";
import { useEffect, useRef } from "react";

interface ChatCointainerProps {
  chat: ChatHistory[];
}

interface ChatHistory {
  ID: number;
  number: number;
  who: number;
  dialog: string;
}

const ChatContainer = ({ chat }: ChatCointainerProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [chat]);
  return (
    <VStack
      ref={scrollableRef}
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
      {chat.map((item: ChatHistory) => (
        <BubbleChat
          sender={item.who}
          text={item.dialog}
          key={item.ID}
        ></BubbleChat>
      ))}
      console.log(dummyChat)
    </VStack>
  );
};

export default ChatContainer;

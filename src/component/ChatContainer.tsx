import {
  Button,
  Container,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import BubbleChat from "./BubbleChat";
import * as database from "../algorithm/database";
import { forEach } from "mathjs";

// interface ChatCointainerProps {
//   history: ChatHistory[];
// }

// interface ChatHistory {
//   ID: number;
//   number: number;
//   who: number;
//   dialog: string;
// }

// function createChat(chatProp: any) {
//   return (
//     <BubbleChat
//       sender={chatProp.who}
//       text={chatProp.dialog}
//       index={chatProp.ID}
//     ></BubbleChat>
//   );
// }

const ChatContainer = () => {
  // database.connect();
  // const dummyChat = database.getDialogs(0, () => {
  //   console.log("found");
  // });
  // database.disconnect();
  return (
    <VStack
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
      {/* {dummyChat.map((item: ChatHistory) => (
        <BubbleChat
          sender={item.who}
          text={item.dialog}
          index={item.ID}
        ></BubbleChat>
      ))} */}
      console.log(dummyChat)
    </VStack>
  );
};

export default ChatContainer;

import {
  Button,
  Container,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import BubbleChat from "./BubbleChat";

const ChatContainer = () => {
  const dummyChat = [
    { sender: 1, text: "Hello, How are you" },
    { sender: 0, text: "Hello, How are you" },

    { sender: 1, text: "I'm doing well, thanks for asking. How about you?" },
    { sender: 0, text: "I'm good too. What have you been up to?" },

    { sender: 1, text: "Not much, just been busy with work. How about you?" },
    { sender: 0, text: "Same here, work has been keeping me pretty busy." },

    {
      sender: 1,
      text: "Yeah, it can be tough sometimes. What do you do for work?",
    },
    { sender: 0, text: "I work in marketing. How about you?" },

    {
      sender: 1,
      text: "I work in tech. It's a pretty demanding job, but I enjoy it.",
    },
    {
      sender: 0,
      text: "That sounds interesting. What kind of tech do you work on?",
    },

    {
      sender: 1,
      text: "I work on software development, specifically in the AI field.",
    },
    {
      sender: 0,
      text: "Wow, that's really impressive. AI is such a fascinating topic.",
    },

    {
      sender: 1,
      text: "Yes, it definitely is. What do you like to do in your free time?",
    },
    { sender: 0, text: "I enjoy reading and going to the gym. How about you?" },

    {
      sender: 1,
      text: "I like to play video games and watch movies. What kind of books do you like to read?",
    },
    {
      sender: 0,
      text: "I enjoy reading science fiction and mystery novels. How about you?",
    },

    {
      sender: 1,
      text: "I also like science fiction, but I also enjoy reading fantasy and horror.",
    },
    {
      sender: 0,
      text: "That's cool. Do you have any favorite authors in those genres?",
    },

    {
      sender: 1,
      text: "For science fiction, I really like Isaac Asimov and Arthur C. Clarke. For fantasy, J.R.R. Tolkien is my favorite. And for horror, Stephen King is hard to beat.",
    },
    {
      sender: 0,
      text: "Those are all great authors. I've read some of their books and enjoyed them.",
    },

    {
      sender: 1,
      text: "Yeah, they're all really talented writers. It was nice chatting with you.",
    },
    { sender: 0, text: "Likewise. Have a good day!" },
  ];
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
      {dummyChat.map((item, index) => (
        <BubbleChat
          sender={item.sender}
          text={item.text}
          index={index}
        ></BubbleChat>
      ))}
    </VStack>
  );
};

export default ChatContainer;

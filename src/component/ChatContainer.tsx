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
    {
      sender: 1,
      text: "Tell me story of Naruto",
    },
    {
      sender: 0,
      text: `Naruto is a popular Japanese anime and manga series created by Masashi Kishimoto. The story follows a young boy named Naruto Uzumaki, who dreams of becoming the Hokage, the leader of his village. /n

      Naruto is a member of the Uzumaki clan, but his parents died when he was just a baby. He was shunned by the villagers of his hometown because he was the host of the Nine-Tailed Fox, a powerful and destructive creature that had attacked the village years ago. Naruto grew up as a lonely outcast, but he never gave up on his dream of becoming Hokage.
      
      In order to achieve his dream, Naruto joined the ninja academy and trained under the guidance of his teacher, Iruka Umino. Naruto was often reckless and impulsive, but he possessed a strong will and a kind heart. He also had a natural talent for ninja skills, especially when it came to using his signature technique, the Shadow Clone Jutsu.
      
      As Naruto grew up, he made friends and allies, including Sasuke Uchiha and Sakura Haruno, who would become his teammates on many missions. Naruto's skills continued to grow, and he faced many powerful foes, including Orochimaru, a former student of his teacher, and the Akatsuki, a criminal organization that sought to capture the Nine-Tailed Fox.`,
    },
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

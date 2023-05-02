import { Button, Container, VStack, Text } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import HistoryList from "./HistoryList";
import BottomSidebar from "./BottomSidebar";

function Sidebar() {
  let history = [
    {
      title: "What are the benefits of meditation?",
      id: 0,
    },
    {
      title: "How can I learn a new language quickly?",
      id: 1,
    },
    {
      title: "What are some tips for improving my public speaking skills?",
      id: 2,
    },
    {
      title: "What is the best way to save money for retirement?",
      id: 3,
    },
    {
      title:
        "What are some common interview questions and how should I answer them?",
      id: 4,
    },
    {
      title: "How can I improve my writing skills?",
      id: 5,
    },
    {
      title: "What are the best ways to stay motivated when studying?",
      id: 6,
    },
    {
      title: "How can I start my own business?",
      id: 7,
    },
    {
      title: "What are some healthy eating habits?",
      id: 8,
    },
    {
      title: "What are the benefits of exercise?",
      id: 9,
    },
    {
      title: "How can I improve my time management skills?",
      id: 10,
    },
    {
      title: "What are some effective study techniques?",
      id: 11,
    },
    {
      title: "How can I reduce stress in my daily life?",
      id: 12,
    },
    {
      title:
        "What are some effective ways to network and build professional relationships?",
      id: 13,
    },
    {
      title: "How can I improve my leadership skills?",
      id: 14,
    },
  ];
  return (
    <>
      <VStack textColor="#FFFFFF">
        <Container h="auto" mt="2" ml="-2">
          <Button
            variant="outline"
            height="48px"
            width="235px"
            border="1px"
            borderRadius="8px"
            justifyContent="flex-start"
            _active={{
              bg: "#343541",
              transform: "scale(0.98)",
            }}
            leftIcon={<IoMdAdd color="white" />}
            marginLeft={0}
          >
            <Text marginLeft={0} marginBottom={1}>
              New Chat
            </Text>
          </Button>
        </Container>
        <Container
          h="calc(100vh - 48px - 290px)"
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
          <HistoryList hist={history} />
        </Container>
        <Container h="auto" padding={3} borderTop="1px">
          <BottomSidebar />
        </Container>
      </VStack>
    </>
  );
}

export default Sidebar;

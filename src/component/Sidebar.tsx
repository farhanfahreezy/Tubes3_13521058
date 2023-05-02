import { Button, Container, VStack, Text } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import HistoryList from "./HistoryList";
import RadioButton from "./RadioButton";
import BottomSidebar from "./BottomSidebar";

function Sidebar() {
  let history = [
    "History 1",
    "History 2",
    "History 3",
    "History 4",
    "History 5",
  ];
  return (
    <>
      <VStack textColor="#FFFFFF">
        <Container h="auto" my="2" ml="-2">
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
            <Text marginLeft={2} marginTop={3}>
              New Chat
            </Text>
          </Button>
        </Container>
        <Container
          h="calc(100vh - 48px - 315px)"
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
          <HistoryList title={history} />
        </Container>
        <Container h="auto" padding={3} borderTop="1px">
          <BottomSidebar />
        </Container>
      </VStack>
    </>
  );
}

export default Sidebar;

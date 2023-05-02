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
      <VStack>
        <Container h="auto" mt="4">
          <Button
            variant="outline"
            height="48px"
            width="220px"
            border="1px"
            borderRadius="8px"
            justifyContent="flex-start"
            _active={{
              bg: "#343541",
              transform: "scale(0.98)",
            }}
            leftIcon={<IoMdAdd color="white" />}
          >
            <Text marginLeft={2} marginTop={3}>
              New Chat
            </Text>
          </Button>
        </Container>
        <Container h="calc(100vh - 48px - 315px)">
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

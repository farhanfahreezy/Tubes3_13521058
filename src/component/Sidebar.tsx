import { Button, Container, VStack } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import HistoryList from "./HistoryList";
import RadioButton from "./RadioButton";

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
        <Container padding={4} h="auto">
          <Button
            variant="outline"
            height="48px"
            width="220px"
            border="1px"
            borderRadius="8px"
            textAlign="left"
            // leftIcon={<GrAdd color="white" />}
          >
            New Chat
          </Button>
        </Container>
        <Container>
          <HistoryList title={history} />
        </Container>
        <Container>{/* <RadioButton /> */}</Container>
      </VStack>
    </>
  );
}

export default Sidebar;

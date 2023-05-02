import { Button, Container, Text } from "@chakra-ui/react";
import { MouseEvent, useState } from "react";
import { BsChatLeft } from "react-icons/bs";

interface HistoryTitle {
  title: string[];
}

function HistoryList({ title }: HistoryTitle) {
  return (
    <Container ml="-6">
      {title.map((item) => (
        <Button
          variant="ghost"
          height="48px"
          width="235px"
          borderRadius="8px"
          justifyContent="flex-start"
          leftIcon={<BsChatLeft color="white" />}
          _active={{
            bg: "#343541",
            transform: "scale(0.98)",
          }}
        >
          <Text marginLeft={2} marginTop={3}>
            {item}
          </Text>
        </Button>
      ))}
    </Container>
  );
}

export default HistoryList;

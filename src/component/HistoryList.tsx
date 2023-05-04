import { Button, Container, Text } from "@chakra-ui/react";
import { set } from "lodash";
import { MouseEvent, useState } from "react";
import { BsChatLeft } from "react-icons/bs";

interface History {
  title: string;
  id: number;
}

interface HistoryTitle {
  hist: History[];
  selectedId: number;
  handleSelectList: (id: number) => void;
}

function HistoryList({ hist, selectedId, handleSelectList }: HistoryTitle) {
  return (
    <Container ml="-6">
      {hist.map((item) => (
        <Button
          key={item.id}
          variant={item.id === selectedId ? "solid" : "ghost"}
          height="48px"
          width="235px"
          borderRadius="8px"
          justifyContent="flex-start"
          leftIcon={<BsChatLeft color="white" />}
          _active={{
            bg: "#343541",
            transform: "scale(0.98)",
          }}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          onClick={() => {
            handleSelectList(item.id);
          }}
        >
          <Container
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, transparent 0%, black 10%, black 100%)",
            }}
            marginLeft={-4}
            w="calc(100% - 10px)"
          >
            <Text marginLeft={2} marginBottom={1} fontWeight="normal">
              {item.title}
            </Text>
          </Container>
        </Button>
      ))}
    </Container>
  );
}

export default HistoryList;

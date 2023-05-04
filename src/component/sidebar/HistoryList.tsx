import { Button, Container, Text } from "@chakra-ui/react";
import { set } from "lodash";
import { MouseEvent, useState } from "react";
import { BsChatLeft } from "react-icons/bs";

interface HistoryProps {
  title: string;
  ID: number;
}

interface HistoryListProps {
  hist: HistoryProps[];
  selectedId: number;
  handleSelectList: (id: number) => void;
  switchChatHistory: (id: number) => void;
}

function HistoryList({
  hist,
  selectedId,
  handleSelectList,
  switchChatHistory,
}: HistoryListProps) {
  const handleListWhenClicked = (id: number) => {
    handleSelectList(id);
    switchChatHistory(id);
  };
  return (
    <Container ml="-6">
      {hist.map((item) => (
        <Button
          key={item.ID}
          variant={item.ID === selectedId ? "solid" : "ghost"}
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
            handleListWhenClicked(item.ID);
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

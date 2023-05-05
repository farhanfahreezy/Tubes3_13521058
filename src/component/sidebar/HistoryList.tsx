import { Button, Container, Text } from "@chakra-ui/react";
import { BsChatLeft } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

interface HistoryProps {
  number: number;
  dialog: string;
}

interface HistoryListProps {
  hist: HistoryProps[];
  selectedId: number;
  handleSelectList: (id: number) => void;
  switchChatHistory: (id: number) => void;
  deleteAHistory: (id: number) => void;
}

function HistoryList({
  hist,
  selectedId,
  handleSelectList,
  switchChatHistory,
  deleteAHistory,
}: HistoryListProps) {
  const handleListWhenClicked = (id: number) => {
    handleSelectList(id);
    switchChatHistory(id);
  };
  return (
    <Container ml="-6">
      {hist.map((item) => (
        <Button
          key={item.number}
          variant={item.number === selectedId ? "solid" : "ghost"}
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
            handleListWhenClicked(item.number);
          }}
        >
          <Container
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, transparent 0%, black 10%, black 100%)",
            }}
            marginLeft={-4}
            w={
              item.number === selectedId
                ? "calc(100% - 35px)"
                : "calc(100% - 10px)"
            }
          >
            <Text marginLeft={2} marginBottom={0} fontWeight="normal">
              {item.dialog}
            </Text>
          </Container>
          {item.number === selectedId && (
            <Button
              padding={2.5}
              variant="ghost"
              colorScheme="none"
              onClick={() => {
                deleteAHistory(item.number);
              }}
            >
              <BiTrash color="white" size="sm" />
            </Button>
          )}
        </Button>
      ))}
    </Container>
  );
}

export default HistoryList;

import {
  Button,
  Container,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import HistoryList from "./HistoryList";
import BottomSidebar from "./BottomSidebar";

interface HistoryProps {
  number: number;
  dialog: string;
}

interface SidebarProps {
  selectedId: number;
  handleSelectList: (id: number) => void;
  selectedVal: string;
  handleChage: (num: string) => void;
  switchChatHistory: (id: number) => void;
  historyList: HistoryProps[];
  addHistoryList: () => void;
  onOpenModal: () => void;
  deleteAHistory: (id: number) => void;
  numOfHistory: number;
  deleteAllHistory: () => void;
}

function Sidebar({
  selectedId,
  handleSelectList,
  selectedVal,
  handleChage,
  switchChatHistory,
  historyList,
  addHistoryList,
  onOpenModal,
  deleteAHistory,
  numOfHistory,
  deleteAllHistory,
}: SidebarProps) {
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });

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
            onClick={addHistoryList}
          >
            <Text marginLeft={0} marginBottom={0}>
              New Chat
            </Text>
          </Button>
        </Container>
        <Container
          h={
            currentBreakpoint === "md"
              ? numOfHistory !== 0
                ? "calc(100vh - 386px)"
                : "calc(100vh - 338px)"
              : numOfHistory !== 0
              ? "calc(100vh - 422px)"
              : "calc(100vh - 374px)"
            // : "calc(100vh - 374px)"
          }
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
          <HistoryList
            hist={historyList}
            selectedId={selectedId}
            handleSelectList={handleSelectList}
            switchChatHistory={switchChatHistory}
            deleteAHistory={deleteAHistory}
          />
        </Container>
        {numOfHistory !== 0 && (
          <Button
            padding={2.5}
            px={5}
            variant="ghost"
            onClick={deleteAllHistory}
          >
            <BiTrash color="white" size="sm" />
            <Text paddingLeft={2} paddingTop={1}>
              Delete All
            </Text>
          </Button>
        )}
        <Container h="auto" padding={3} borderTop="1px">
          <BottomSidebar
            selectedVal={selectedVal}
            handleChage={handleChage}
            onOpenModal={onOpenModal}
          />
        </Container>
      </VStack>
    </>
  );
}

export default Sidebar;

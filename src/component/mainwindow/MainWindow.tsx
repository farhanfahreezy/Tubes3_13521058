import { ChangeEvent, KeyboardEvent } from "react";
import {
  Grid,
  GridItem,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import TopBar from "./TopBar";
import ChatContainer from "./ChatContainer";
import InputContainer from "./InputContainer";

interface ChatHistory {
  ID: number;
  number: number;
  who: number;
  dialog: string;
}

interface MainWindowProps {
  inputValue: string;
  setInputValue: (newString: string) => void;
  outputValue: string;
  setOutputValue: (newString: string) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  handleInputEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  chat: ChatHistory[];
  onOpen: () => void;
}

const MainWindow = ({
  inputValue,
  setInputValue,
  outputValue,
  setOutputValue,
  handleInputChange,
  handleButtonClick,
  handleInputEnter,
  chat,
  onOpen,
}: MainWindowProps) => {
  const bgTopBar = useColorModeValue("#202123", "#343541");
  const bgBorder = useColorModeValue("#202123", "#FFFFFF");
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
  return (
    <>
      <Grid
        templateAreas={`"topBar" "chatContainer" "inputContainer"`}
        w="100%"
        h="100%"
      >
        <GridItem
          area="topBar"
          borderBottom="1px"
          borderColor={bgBorder}
          bg={bgTopBar}
          h="fit-content"
          w="100%"
        >
          <TopBar onOpen={onOpen} />
        </GridItem>
        <GridItem
          area="chatContainer"
          h={
            currentBreakpoint === "md"
              ? "calc(100vh - 186px)"
              : "calc(100vh - 180px)"
          }
          w="100%"
          alignContent="flex-start"
        >
          <ChatContainer chat={chat} />
        </GridItem>
        <GridItem
          area="inputContainer"
          borderTop="1px"
          borderColor={bgBorder}
          h="fit-content"
          w="100%"
        >
          <InputContainer
            inputValue={inputValue}
            setInputValue={setInputValue}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            handleInputChange={handleInputChange}
            handleButtonClick={handleButtonClick}
            handleInputEnter={handleInputEnter}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainWindow;

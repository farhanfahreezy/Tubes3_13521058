import { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import MainWindow from "./component/mainwindow/MainWindow";
import Sidebar from "./component/sidebar/Sidebar";

interface HistoryProps {
  title: string;
  ID: number;
}

interface ChatHistory {
  ID: number;
  number: number;
  who: number;
  dialog: string;
}

function App() {
  // All useState
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("KMP");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [chatArray, setChatArray] = useState<ChatHistory[]>([]);
  const [historyList, setHistoryList] = useState<HistoryProps[]>([]);
  const [numOfHistory, setNumOfHistory] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Color
  const bgSideBar = useColorModeValue("#202123", "#202123");
  const bgMainWindow = useColorModeValue("FFFFFF", "#343541");
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });

  // Changes
  const addNumOfHistory = () => {
    setNumOfHistory(numOfHistory + 1);
  };
  const subNumOfHistory = () => {
    setNumOfHistory(numOfHistory - 1);
  };

  const changeHistoryList = () => {
    const history = [
      {
        title: "What are the benefits of meditation?",
        ID: 0,
      },
      {
        title: "How can I learn a new language quickly?",
        ID: 1,
      },
    ];
    setHistoryList(history);
  };

  const addHistoryList = () => {
    const newL = {
      title: "New Chat",
      ID: numOfHistory,
    };
    addNumOfHistory();
    setHistoryList([...historyList, newL]);
  };

  const addChatHistory = () => {
    const newC = {
      ID: 2,
      number: 0,
      who: 1,
      dialog: "New?",
    };
    setChatArray([...chatArray, newC]);
  };

  const switchChatHistory = (id: number) => {
    const dummyChat = [
      {
        ID: 2,
        number: 0,
        who: 1,
        dialog: "Hi there, hows your day going?",
      },
      {
        ID: 3,
        number: 0,
        who: 0,
        dialog: "It’s going pretty well, thanks for asking. How about you?",
      },
      {
        ID: 4,
        number: 0,
        who: 1,
        dialog:
          "I’m doing pretty good, thanks. Have you done anything fun today?",
      },
      {
        ID: 5,
        number: 0,
        who: 0,
        dialog:
          "Yeah, I went for a hike in the mountains earlier. It was beautiful.",
      },
      {
        ID: 6,
        number: 0,
        who: 1,
        dialog:
          "That sounds like a great way to spend the day. Did you take any pictures?",
      },
      {
        ID: 7,
        number: 0,
        who: 0,
        dialog: "Yeah, I did. I can show them to you later if you want.",
      },
      {
        ID: 8,
        number: 0,
        who: 1,
        dialog: "Sure, that would be great. What kind of camera do you use?",
      },
      {
        ID: 23,
        number: 0,
        who: 0,
        dialog:
          "Yeah, I’ve played a few shows at local bars and cafes. It’s a great way to connect with other musicians.",
      },
    ];
    setChatArray(dummyChat);
  };

  // History List Handler
  const handleSelectList = (id: number) => {
    setSelectedIndex(id);
  };

  // Radio Button Handler
  const handleSelectedAlgorithm = (algo: string) => {
    setSelectedAlgorithm(algo);
  };

  // Input Output Handler
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setOutputValue(inputValue);
    addChatHistory();
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setOutputValue(inputValue);
      addChatHistory();
    }
  };
  return (
    <>
      <Grid
        templateAreas={{
          base: `"mainWindow"`,
          md: `"sidebar mainWindow"`,
        }}
      >
        <Show above="md">
          <GridItem area="sidebar" bg={bgSideBar} h="100vh" w="250px">
            <Sidebar
              selectedId={selectedIndex}
              handleSelectList={handleSelectList}
              selectedVal={selectedAlgorithm}
              handleChage={handleSelectedAlgorithm}
              switchChatHistory={switchChatHistory}
              historyList={historyList}
              addHistoryList={addHistoryList}
            />
          </GridItem>
        </Show>
        <GridItem
          area="mainWindow"
          bg={bgMainWindow}
          h="100vh"
          w={currentBreakpoint === "md" ? "calc(100vw - 250px)" : "100vw"}
          overflowX="hidden"
          overflowY="hidden"
        >
          <MainWindow
            inputValue={inputValue}
            setInputValue={setInputValue}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            handleInputChange={handleInputChange}
            handleButtonClick={handleButtonClick}
            handleInputEnter={handleInputEnter}
            chat={chatArray}
            onOpen={onOpen}
          />
        </GridItem>
      </Grid>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bgSideBar} maxW="250px">
          <Sidebar
            selectedId={selectedIndex}
            handleSelectList={handleSelectList}
            selectedVal={selectedAlgorithm}
            handleChage={handleSelectedAlgorithm}
            switchChatHistory={switchChatHistory}
            historyList={historyList}
            addHistoryList={addHistoryList}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default App;

import { useState, ChangeEvent, KeyboardEvent } from "react";
import url from "url";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Button,
  Link,
} from "@chakra-ui/react";
import * as database from "./algorithm/database.js";
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
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

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

  const changeHistoryList = (num: number) => {
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
      title: "How can I learn a new language quickly",
      ID: numOfHistory,
    };
    addNumOfHistory();
    setHistoryList([...historyList, newL]);
  };

  const removeHistoryList = (id: number) => {
    setHistoryList((historyList) =>
      historyList.filter((item) => item.ID !== id)
    );
    // subNumOfHistory();
  };

  const addChatBubble = (dialog: string) => {
    if (dialog !== "") {
      const newC = {
        ID: 2,
        number: 0,
        who: 1,
        dialog: dialog,
      };
      setChatArray([...chatArray, newC]);
    }
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
    // database.connect();
    // database.getDialogs(0, (dialogs: ChatHistory) => {
    //   console.log(dialogs);
    // });
    // database.disconnect();
    // console.log("som");

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
    addChatBubble(inputValue);
    setInputValue("");
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setOutputValue(inputValue);
      addChatBubble(inputValue);
      setInputValue("");
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
              onOpenModal={onOpenModal}
              deleteAHistory={removeHistoryList}
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
            onOpenModal={onOpenModal}
            deleteAHistory={removeHistoryList}
          />
        </DrawerContent>
      </Drawer>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpenModal}
        onClose={onCloseModal}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent bg={bgMainWindow}>
          <ModalHeader>Thank you for using this web-app!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Hey there! So, this website is still in its development phase, but
            fear not, updates are coming your way! ...Well, at least that's the
            plan. Let's hope for the best, shall we?
          </ModalBody>

          <ModalFooter>
            <Link
              href="https://github.com/farhanfahreezy/Tubes3_13521058"
              target="_blank"
            >
              <Button colorScheme="blue" mr={3}>
                Visit Our Github
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;

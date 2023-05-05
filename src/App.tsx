import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import axios, { AxiosRequestConfig, Axios } from "axios";
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
import MainWindow from "./component/mainwindow/MainWindow";
import Sidebar from "./component/sidebar/Sidebar";

interface HistoryProps {
  number: number;
  dialog: string;
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

  // Getting History List
  useEffect(() => {
    async function fetchData() {
      axios
        .get("http://localhost:5174/getHistory/")
        .then((res) => {
          console.log(res.data);
          setHistoryList(res.data);
          setNumOfHistory(res.data.length);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  // Changes
  const deleteAllHistory = () => {
    setHistoryList([]);
    setNumOfHistory(0);
    setChatArray([]);
  };

  const addNumOfHistory = () => {
    setNumOfHistory(numOfHistory + 1);
  };
  const subNumOfHistory = () => {
    setNumOfHistory(numOfHistory - 1);
  };

  const addHistoryList = () => {
    const newL: HistoryProps = {
      number: numOfHistory,
      dialog: "New Chat",
    };
    addNumOfHistory();
    setHistoryList([...historyList, newL]);
  };

  const removeHistoryList = (id: number) => {
    // TODO: IMPLEMENTASI
    setChatArray([]);
    setHistoryList((historyList) =>
      historyList.filter((item) => item.number !== id)
    );

    // subNumOfHistory();
  };

  const addChatBubble = (dialog: string) => {
    axios
      .post(`http://localhost:5174/sendChat`, {
        number: selectedIndex,
        who: 1,
        dialog: dialog,
        algorithms: selectedAlgorithm,
      })
      .then((res) => {
        switchChatHistory(selectedIndex);
        switchChatHistory(selectedIndex);
        console.log(res.data);
        switchChatHistory(selectedIndex);
        switchChatHistory(selectedIndex);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // getDialog
  const switchChatHistory = (id: number) => {
    axios
      .get(`http://localhost:5174/getDialog`, {
        params: { historyNumber: id },
      })
      .then((res) => {
        console.log(res.data);
        setChatArray(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
    switchChatHistory(selectedIndex);
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setOutputValue(inputValue);
      addChatBubble(inputValue);
      setInputValue("");
      switchChatHistory(selectedIndex);
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
              numOfHistory={numOfHistory}
              deleteAllHistory={deleteAllHistory}
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
            numOfHistory={numOfHistory}
            selectedIndex={selectedIndex}
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
            numOfHistory={numOfHistory}
            deleteAllHistory={deleteAllHistory}
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

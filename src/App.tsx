import { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import MainWindow from "./component/MainWindow";
import Sidebar from "./component/Sidebar";

function App() {
  // All useState
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("KMP");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  // Changes

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
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setOutputValue(inputValue);
    }
  };

  const bgSideBar = useColorModeValue("#202123", "#202123");
  const bgMainWindow = useColorModeValue("FFFFFF", "#343541");
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
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
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

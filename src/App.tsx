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
            <Sidebar />
          </GridItem>
        </Show>
        <GridItem
          area="mainWindow"
          bg={bgMainWindow}
          h="100vh"
          w={currentBreakpoint === "md" ? "calc(100vw - 250px)" : "100vw"}
        >
          <MainWindow />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

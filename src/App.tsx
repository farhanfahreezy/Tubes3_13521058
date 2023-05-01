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
        templateColumns={currentBreakpoint === "md" ? "250px 1fr" : "1fr"}
      >
        <Show above="md">
          <GridItem area="sidebar" bg={bgSideBar} h="100vh">
            <Sidebar />
          </GridItem>
        </Show>
        <GridItem area="mainWindow" bg={bgMainWindow} h="100vh">
          <MainWindow />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

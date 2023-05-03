import {
  Grid,
  GridItem,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import TopBar from "./TopBar";
import ChatContainer from "./ChatContainer";
import InputContainer from "./InputContainer";

const MainWindow = () => {
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
          <TopBar />
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
          <ChatContainer />
        </GridItem>
        <GridItem
          area="inputContainer"
          borderTop="1px"
          borderColor={bgBorder}
          h="fit-content"
          w="100%"
        >
          <InputContainer />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainWindow;

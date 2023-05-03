import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import TopBar from "./TopBar";
import ChatContainer from "./ChatContainer";
import InputContainer from "./InputContainer";

const MainWindow = () => {
  const bgTopBar = useColorModeValue("#202123", "#343541");
  const bgBorder = useColorModeValue("#202123", "#FFFFFF");
  return (
    <>
      <Grid
        templateAreas={`"topBar" "chatContainer" "inputContainer"`}
        w="100%"
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
          h="calc(100vh - 80px - 106px)"
          w="100%"
          alignContent="flex-start"
        >
          <ChatContainer />
        </GridItem>
        <GridItem
          area="inputContainer"
          borderTop="1px"
          borderColor={bgBorder}
          h="auto"
          w="100%"
        >
          <InputContainer />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainWindow;

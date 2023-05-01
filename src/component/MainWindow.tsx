import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import TopBar from "./TopBar";
import ChatContainer from "./ChatContainer";
import InputContainer from "./InputContainer";

const MainWindow = () => {
  const bgTopBar = useColorModeValue("#202123", "#343541");
  const bgBorder = useColorModeValue("#202123", "#FFFFFF");
  return (
    <>
      <Grid templateAreas={`"topBar" "chatContainer" "inputContainer"`}>
        <GridItem
          area="topBar"
          borderBottom="1px"
          borderColor={bgBorder}
          bg={bgTopBar}
          h="auto"
        >
          <TopBar />
        </GridItem>
        <GridItem area="chatContainer" h="calc(100vh - 80px - 135px)">
          <ChatContainer />
        </GridItem>
        <GridItem
          area="inputContainer"
          borderTop="1px"
          borderColor={bgBorder}
          h="auto"
        >
          <InputContainer />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainWindow;
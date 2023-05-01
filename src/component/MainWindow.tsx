import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const MainWindow = () => {
  return (
    <>
      <Grid templateAreas={`"topBar" "chatContainer" "inputContainer"`}>
        <GridItem area="Top Bar">Top Bar</GridItem>
        <GridItem area="chatContainer">Chat</GridItem>
        <GridItem area="inputContainer">Input</GridItem>
      </Grid>
    </>
  );
};

export default MainWindow;

import { Grid, GridItem, Show } from "@chakra-ui/react";
import MainWindow from "./component/MainWindow";

function App() {
  const user = { name: "Farhan" };
  return (
    <>
      <Grid
        templateAreas={{
          base: `"mainWindow"`,
          md: `"sidebar mainWindow"`,
        }}
      >
        <Show above="md">
          <GridItem area="sidebar" bg="#202123">
            Sidebar
          </GridItem>
        </Show>
        <GridItem area="mainWindow" bg="#343541">
          <MainWindow />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

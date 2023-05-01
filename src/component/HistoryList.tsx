import { Button } from "@chakra-ui/react";
import { MouseEvent, useState } from "react";

interface HistoryTitle {
  title: string[];
}

function HistoryList({ title }: HistoryTitle) {
  return (
    <>
      {title.map((item) => (
        <Button variant="ghost" height="48px" width="220px" borderRadius="8px">
          {item}
        </Button>
      ))}
    </>
  );
}

export default HistoryList;

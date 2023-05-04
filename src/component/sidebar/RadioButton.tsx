import { FormControl, VStack, Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

interface RadioButtonProps {
  selectedVal: string;
  handleChage: (num: string) => void;
}

const RadioButton = ({ selectedVal, handleChage }: RadioButtonProps) => {
  return (
    <FormControl as="fieldset">
      <RadioGroup value={selectedVal} onChange={handleChage}>
        <VStack
          spacing="2"
          align="flex-start"
          marginLeft="75px"
          marginBottom={2}
        >
          <Radio value="KMP">KMP</Radio>
          <Radio value="BM">BM</Radio>
        </VStack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;

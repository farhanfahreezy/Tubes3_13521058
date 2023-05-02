import { FormControl, VStack, Radio, RadioGroup } from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";

const RadioButton = () => {
  const [selectedValue, setSelectedValue] = useState("KMP");
  const handleChange = (val: string) => {
    setSelectedValue(val);
  };

  return (
    <FormControl as="fieldset">
      <RadioGroup value={selectedValue} onChange={handleChange}>
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

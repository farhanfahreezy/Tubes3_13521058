import { FormControl, VStack, Radio, RadioGroup } from "@chakra-ui/react";

const RadioButton = () => {
  return (
    <FormControl as="fieldset">
      <RadioGroup defaultValue="KMP">
        <VStack spacing="24px">
          <Radio value="KMP">KMP</Radio>
          <Radio value="BM">BM</Radio>
        </VStack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;

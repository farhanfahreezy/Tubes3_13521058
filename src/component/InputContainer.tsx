import {
  FormControl,
  Input,
  FormHelperText,
  Button,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

interface InputContainerProps {
  inputValue: string;
  setInputValue: (newString: string) => void;
  outputValue: string;
  setOutputValue: (newString: string) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  handleInputEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const InputContainer = ({
  inputValue,
  setInputValue,
  outputValue,
  setOutputValue,
  handleInputChange,
  handleButtonClick,
  handleInputEnter,
}: InputContainerProps) => {
  const sendColor = useColorModeValue("black", "white");
  // const messagebBelow = useColorModeValue(
  //   "AAHHH! MY EYEESS",
  //   "Did you know that a group of flamingos is called a flamboyance?"
  // );

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  // const handleButtonClick = () => {
  //   setOutputValue(inputValue);
  // };

  // const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     setOutputValue(inputValue);
  //   }
  // };
  return (
    <>
      <FormControl padding={5}>
        <InputGroup>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputEnter}
            type="string"
            placeholder="Send a message..."
            boxShadow="lg"
            p={6}
            rounded="md"
            border="0px"
            w="100%"
          />
          <InputRightElement mr={2} mt={1}>
            <Button colorScheme="none" size="sm" onClick={handleButtonClick}>
              <RiSendPlaneFill color={sendColor} size="40px" />
            </Button>
          </InputRightElement>
        </InputGroup>

        <FormHelperText padding={2}>
          {outputValue === ""
            ? "Did you know that a group of flamingos is called a flamboyance?"
            : outputValue}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default InputContainer;

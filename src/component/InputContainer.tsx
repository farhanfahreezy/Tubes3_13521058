import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  IconButton,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import { BsFillSendFill } from "react-icons/bs";

const InputContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setOutputValue(inputValue);
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setOutputValue(inputValue);
    }
  };
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
              <BsFillSendFill color="white" />
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

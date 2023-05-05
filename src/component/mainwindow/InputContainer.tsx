import {
  FormControl,
  Input,
  FormHelperText,
  Button,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

interface InputContainerProps {
  inputValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  handleInputEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const InputContainer = ({
  inputValue,
  handleInputChange,
  handleButtonClick,
  handleInputEnter,
}: InputContainerProps) => {
  const sendColor = useColorModeValue("black", "white");
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
          Did you know that a group of flamingos is called a flamboyance?
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default InputContainer;

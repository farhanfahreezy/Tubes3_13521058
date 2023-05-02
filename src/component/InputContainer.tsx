import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const InputContainer = () => {
  return (
    <>
      <FormControl padding={5}>
        <Input
          type="email"
          placeholder="Send a message..."
          boxShadow="lg"
          p={6}
          rounded="md"
          border="0px"
          w="100%"
        />
        <FormHelperText padding={2}>
          Did you know that a group of flamingos is called a flamboyance?
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default InputContainer;

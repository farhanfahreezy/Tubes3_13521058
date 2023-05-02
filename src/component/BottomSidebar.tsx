import RadioButton from "./RadioButton";
import {
  Divider,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const BottomSidebar = () => {
  return (
    <>
      <VStack bg="#40414F" borderRadius="10">
        <Text
          fontSize="24"
          fontWeight="semibold"
          marginTop={2}
          marginBottom={1}
        >
          Algorithm
        </Text>
        <Divider borderWidth={2} overflow="hidden" />
        <RadioButton />
      </VStack>
      <VStack marginTop={1} spacing="0px">
        <HStack>
          <Text fontSize={18} marginTop={3}>
            How to use
          </Text>
          <IconButton
            icon={<BsFillQuestionCircleFill color="white" />}
            aria-label="Home"
            colorScheme="none"
            size="none"
          />
        </HStack>
        <Link
          href="https://github.com/farhanfahreezy/Tubes3_13521058"
          display="flex"
          alignItems="center"
          target="_blank"
          _hover={{ color: "green.300" }}
        >
          <AiFillGithub size="40px" />
        </Link>
        <Text>v1.0</Text>
      </VStack>
    </>
  );
};

export default BottomSidebar;

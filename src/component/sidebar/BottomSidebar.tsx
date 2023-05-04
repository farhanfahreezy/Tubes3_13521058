import RadioButton from "./RadioButton";
import {
  Container,
  Divider,
  HStack,
  IconButton,
  Link,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import ModeSwitch from "../ModeSwitch";

interface BottomSidebarProps {
  selectedVal: string;
  handleChage: (num: string) => void;
}

const BottomSidebar = ({ selectedVal, handleChage }: BottomSidebarProps) => {
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
        <RadioButton selectedVal={selectedVal} handleChage={handleChage} />
      </VStack>
      <VStack marginTop={1} spacing="0px">
        <Show below="md">
          <Container px="0" marginLeft="52px" marginTop={2}>
            <ModeSwitch />
          </Container>
        </Show>
        <HStack padding={2}>
          <Text fontSize={18} marginTop={-0.5}>
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

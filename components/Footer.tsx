import {
  Text,
  Flex,
  IconButton,
  Icon,
  HStack,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { FiGitBranch, FiGithub } from "react-icons/fi";

function Footer() {
  const version = "alpha 20231119";
  const text_color_primary = "gray.400";
  const text_color = "gray.500";
  return (
    <Flex
      w="100%"
      h="5vh"
      px="8"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      fontFamily={"mono"}
      flexWrap={"wrap"}
    >
      <Text fontSize="xs" fontWeight="500" color={text_color}>
        Copyright © {new Date().getFullYear()} James Chang.
      </Text>
      <Spacer />
      <Link
        href="https://blog.jchiroto.dev/"
        fontSize="sm"
        fontWeight="500"
        color={text_color_primary}
      >
        blog.
      </Link>
      <Divider ml="2" mr="3" w="20%" borderColor={text_color_primary} />
      <Link
        href="https://jchiroto.dev/"
        fontSize="sm"
        fontWeight="500"
        color={text_color_primary}
      >
        jchiroto.dev
      </Link>
      <Spacer />
      <HStack mr="2">
        <Icon as={FiGitBranch} boxSize="3" color={text_color} />
        <Text fontSize="12" fontWeight="500" color={text_color}>
          {version}
        </Text>
      </HStack>
      <IconButton
        icon={<FiGithub size="1.5em" />}
        size="sm"
        aria-label="GitHub"
        variant="ghost"
        color={text_color}
        onClick={() =>
          window.open("https://github.com/jc-hiroto/blog", "_blank")
        }
        _focus={{ boxShadow: "none" }}
      />
    </Flex>
  );
}

export default Footer;

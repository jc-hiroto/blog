import { Link } from "@chakra-ui/next-js";
import { Divider, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";


function Header() {
  return (
      <Flex w="100%" h="14" px="8" py="4" alignItems="center">
      <Link href="/" fontSize="xl" fontWeight="600" fontFamily={"mono"} color={"gray.400"}>
        blog.
      </Link>
      <Divider mx="12" borderColor={"gray.500"} />
      <Link
          href="https://jchiroto.dev"
          ml="auto"
          fontSize={"sm"}
          color="gray.400"
          fontFamily={"mono"}
          isExternal
      >
          <HStack spacing={2}>
          <Text>jchiroto.dev</Text>
          <Icon as={FiExternalLink} />
          </HStack>
      </Link>
      </Flex>
  );
}

export default Header;
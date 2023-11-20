"use client";

import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import { FiPackage } from "react-icons/fi";

export default function Page() {
  return (
    <>
      <Flex w="100%" flexDirection={"column"}>
        <Header />
        <Flex w="100%" minH="90vh" px="8" pt="4" flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Icon as={FiPackage} boxSize={300} position={"absolute"} color="gray.900" zIndex={-1}/>
          <Text fontSize="6xl" fontWeight="600" fontFamily={"mono"} color={"gray.400"}>Unpacking stuff...</Text>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}

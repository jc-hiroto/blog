import { Providers } from "../app/providers";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Flex w="100%" flexDirection={"column"}>
        <Header />
        <Box w="100%" minH="90vh" px="8" pt="4">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Providers>
  );
}

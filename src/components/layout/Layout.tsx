import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from "@/constants";
import { ChakraProvider, Flex, Box, extendTheme } from "@chakra-ui/react";
import Header from "../Header";
import { useSelector } from "react-redux";
import themes from "@/themes/theme";

export default function Layout({ children }: any) {
    const currentTheme = useSelector((state: any) => state.theme.currentTheme);
    return (
        <ChakraProvider theme={extendTheme(themes[currentTheme])}>
            <Flex w="full" h="100vh" direction="column" >
                <Box w="full" height={{ base: `${NAVBAR_HEIGHT_MOBILE}px`, lg: `${NAVBAR_HEIGHT}px` }} >
                    <Header />
                </Box>
                <Flex background="background" width="full" flex="1" justifyContent="center" px={{ base: "2", md: "4", lg: "8" }} py={{ base: "", md: "4", lg: "8" }} gap="12">
                    {children}
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}
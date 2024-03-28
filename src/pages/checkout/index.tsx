import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderTotal from "@/components/Checkout/OrderTotal";
import Header from "@/components/Header";
import PriceSummary from "@/components/ShoppingCart/PriceSummary";
import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from "@/constants";
import { Flex, Heading, Image, VStack, Box, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {

    const cartItems = useSelector((state: any) => state.checkout.cartItems);
    const router = useRouter();
    useEffect(() => {
        window.onbeforeunload = () => true;

        return () => {
            window.onbeforeunload = null;
        };
    }, []);

    useEffect(() => {
        if (cartItems.length === 0) {
            router.push("/cart");
        }
    }, [cartItems.length]
    )

    const [showSummary, setShowSummary] = useState(false);

    return (
        <><Head>
            <title>Checkout</title>
            <meta name="description" content="instapayments cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head><Flex direction="column" w="full">
                <Flex background="background" width="full" flex="1" justifyContent="space-between" gap={{ base: "8", xl: "20" }} h="full" px={{ base: "2", md: "8" }} py="8" flexDirection={{ base: "column", lg: "row" }}>
                    <VStack spacing="8" width="full" alignItems={{ base: "center", lg: "flex-start" }}>
                        <Heading as="h1" size="2xl" color="foreground">Checkout</Heading>
                        <CheckoutForm />
                        <Text color="foreground" fontSize="sm" opacity="0.9" mt="4" textDecoration="underline" onClick={() => setShowSummary(!showSummary)} cursor="pointer" display={{ base: "block", md: "none" }}>{showSummary ? "Hide" : "Show"} Order Summary</Text>
                    </VStack>
                    <Box w={{ base: "100%", xl: "40%" }} display={{ base: showSummary ? "block" : "none", md: "block" }} >
                        <OrderTotal />
                    </Box>
                </Flex>
            </Flex ></>

    )
}
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import OrderTotal from "@/components/Checkout/OrderTotal";
import Header from "@/components/Header";
import PriceSummary from "@/components/ShoppingCart/PriceSummary";
import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from "@/constants";
import { Flex, Heading, Image, VStack } from "@chakra-ui/react";
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

    return (
        <><Head>
            <title>Checkout</title>
            <meta name="description" content="instapayments cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head><Flex direction="column" w="full">
                <Flex background="background" width="full" flex="1" justifyContent="center" p="8" gap="20" h="full">
                    <VStack spacing="8" width="60%" alignItems="flex-start">
                        <Heading as="h1" size="2xl" color="foreground">Checkout</Heading>
                        <CheckoutForm />
                    </VStack>
                    <OrderTotal />
                </Flex>
            </Flex></>

    )
}
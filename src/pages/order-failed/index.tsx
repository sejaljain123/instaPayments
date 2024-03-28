import { Flex, Button, Text, Heading, HStack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaCartShopping } from "react-icons/fa6";
import { GrPower, GrPowerReset } from "react-icons/gr";

export default function OrderConfirmation() {
    const router = useRouter();


    return (
        <><Head>
            <title>InstaPayments</title>
            <meta name="description" content="instapayments cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head><Flex direction="column" gap={4} alignItems="center" justifyContent="center" height="full" textAlign="center">
                <Heading color="foreground" fontSize="6xl" as="h1">Order Failed</Heading>
                <Text color="foreground" fontSize="lg" w="40%">
                    Uh, oh! Something went wrong. We are sorry, your order could not be processed.The payment authorization for your order failed to complete. This could be due to incorrect payment information or an issue with the payment method. Please try again.
                </Text>
                <HStack>
                    <Button color="foreground" variant="outline" mt="6" leftIcon={<FaCartShopping />} onClick={() => router.push("/cart")}>Continue Shopping</Button>
                    <Button colorScheme="primary" variant="solid" mt="6" rightIcon={<GrPowerReset />} onClick={() => router.push("/checkout")}>Try Again</Button>
                </HStack>
                <Text color="gray" textDecoration="underline" fontSize="sm" mt="8" cursor="pointer">Need Support? Contact Us</Text>
            </Flex></>
    )
}
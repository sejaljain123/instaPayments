import { Flex, Button, Text, Heading, HStack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaCartShopping, FaTruckFast } from "react-icons/fa6";

export default function OrderConfirmation() {
    const router = useRouter();

    return (
        <><Head>
            <title>InstaPayments</title>
            <meta name="description" content="instapayments cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head><Flex direction="column" gap={4} alignItems="center" justifyContent="center" height="full" textAlign="center">
                <Text color="foreground" fontSize="sm" opacity="0.9" mt="4">Order #123456</Text>
                <Heading color="foreground" fontSize={{ base: "4xl", md: "6xl" }} as="h1">THANK YOU!</Heading>
                <Text color="foreground" fontSize={{ base: "md", md: "lg" }} w={{ base: "90%", lg: "50%", xl: "40%" }}>We are getting started on your order right away, and you will receive an order confirmation email shortly to user@gmail.com. In the meantime, explore the latest fashion and get inspired by latest trends :)</Text>
                <HStack>
                    <Button variant="outline" mt="6" color="foreground" leftIcon={<FaTruckFast />}>Track Order</Button>
                    <Button colorScheme="primary" variant="solid" mt="6" rightIcon={<FaCartShopping />} onClick={() => router.push("/cart")}>Continue Shopping</Button>
                </HStack>
                <Text color="gray" textDecoration="underline" fontSize="sm" mt="8" cursor="pointer">Read about our return policy here</Text>
            </Flex></>
    )
}
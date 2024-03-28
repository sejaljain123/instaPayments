import { Flex, Heading, HStack, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Custom404() {
    const router = useRouter();1``
    return (
        <Flex direction="column" gap={4} alignItems="center" justifyContent="center" height="full" textAlign="center">
            <Heading color="foreground" fontSize="6xl" as="h1">D&apos;oh</Heading>
            <Heading color="foreground" fontSize="3xl" as="h3">We can&apos;t find that page...</Heading>
            <Text color="foreground" fontSize="lg" w="80%">The page you are looking for might have been removed, or does not exist</Text>
            <HStack>
                <Button colorScheme="primary" variant="solid" mt="6" leftIcon={<FaArrowLeft />} onClick={() => router.push("/cart")}>Go back to Home</Button>
            </HStack>
        </Flex>
    )
}
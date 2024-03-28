import { VStack, HStack, Divider, Flex, Input, Button, Text, Box } from "@chakra-ui/react";
import error from "next/error";
import { useSelector } from "react-redux";

export default function OrderTotal() {

    const cartTotal = useSelector((state: any) => state.checkout.cartTotal);
    const discountAmount = useSelector((state: any) => state.checkout.discount);
    const shippingFee = useSelector((state: any) => state.checkout.shippingCost);
    const cartItems = useSelector((state: any) => state.checkout.cartItems);

    const totalPrice = cartTotal - discountAmount + shippingFee;
    return (
        <VStack gap="4" w="full">
            <VStack spacing="8" width="full" w="full" background="primaryForeground" shadow="lg" borderRadius="xl" px={{ base: "6", md: "8" }} py="8" alignItems="flex-start">
                <Text color="foreground" fontSize="xl" fontWeight="bold">Order Summary</Text>
                <VStack justifyContent="space-between" alignItems="center" w="full" mt="8" color="foreground" fontSize="lg">
                    {cartItems.map((item: any) => (
                        <><HStack w="full" justifyContent="space-between" >
                            <HStack width="full">
                                <Text fontSize="sm">x {item.quantity}</Text>
                                <Text w="20ch" fontSize="md" isTruncated>{item.title}</Text>
                            </HStack>
                            <Text>${item.price * item.quantity}</Text>
                        </HStack>
                            <Divider />
                        </>
                    ))}
                </VStack>
                <VStack justifyContent="space-between" alignItems="center" w="full" mt="8" color="foreground" fontSize="lg">
                    <HStack justifyContent="space-between" w="full" >
                        <Text>Sub Total</Text>
                        <Text>${cartTotal.toFixed(2)}</Text>
                    </HStack>
                    <HStack justifyContent="space-between" w="full">
                        <Text>Discount </Text>
                        <Text>${discountAmount.toFixed(2)}</Text>
                    </HStack>
                    <HStack justifyContent="space-between" w="full">
                        <Text>Delivery Fees </Text>
                        <Text>${shippingFee.toFixed(2)} </Text>
                    </HStack>
                    <Divider mt="12" />
                    <HStack justifyContent="space-between" w="full">
                        <Text>Total</Text>
                        <Text>${totalPrice.toFixed(2)}</Text>
                    </HStack>
                    {discountAmount > 0 && (
                        <Box w="full" mt="8" border="1px solid green" p="6" borderRadius="md" fontWeight="bold" textAlign="center" >
                            <Text color="green.400" fontSize="md" >You saved ${discountAmount} on this order 😀</Text>
                        </Box>
                    )
                    }
                </VStack>
            </VStack >
        </VStack >
    )
}
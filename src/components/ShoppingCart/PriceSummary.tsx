import { addDiscount } from "@/lib/reducers/checkoutSlice";
import { Flex, VStack, Input, Button, Box, Text, HStack, Divider, Spacer } from "@chakra-ui/react"
import { SP } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PriceSummary({ products }: { products: any[] }) {
    const cartTotal = useSelector((state: any) => state.checkout.cartTotal);
    const discountAmount = useSelector((state: any) => state.checkout.discount);
    const shippingFee = useSelector((state: any) => state.checkout.shippingCost);

    const totalPrice = cartTotal - discountAmount + shippingFee;

    const dispatch = useDispatch();


    const [discountCode, setDiscountCode] = useState("");
    const router = useRouter();

    const handleCouponCode = (e: any) => {
        setDiscountCode(e.target.value);
    }

    const applyDiscount = () => {
        if (discountCode === "DISCOUNT") {
            dispatch(addDiscount(10));
        }
        else {
            alert("Invalid Coupon Code");
            dispatch(addDiscount(0));
        }
    }

    return (
        <VStack gap="4" w="full ">
            <VStack spacing="8" width="full" w="full" background="primaryForeground" shadow="lg" borderRadius="xl" px="12" py="8" alignItems="flex-start" >
                <Text color="foreground" fontSize="xl" fontWeight="bold">Cart Total</Text>
                <VStack justifyContent="space-between" alignItems="center" w="full" mt="8" color="foreground" fontSize="lg">
                    <HStack justifyContent="space-between" w="full" >
                        <Text>Sub Total</Text>
                        <Text>${cartTotal.toFixed(2)}</Text>
                    </HStack>
                    <HStack justifyContent="space-between" w="full">
                        <Text>Discount </Text>
                        <Text>-${discountAmount.toFixed(2)}</Text>
                    </HStack>
                    <HStack justifyContent="space-between" w="full">
                        <Text>Delivery Fees </Text>
                        <Text>${shippingFee} </Text>
                    </HStack>
                    <Divider mt="12" />
                    <HStack justifyContent="space-between" w="full">
                        <Text>Total</Text>
                        <Text>${totalPrice.toFixed(2)}</Text>
                    </HStack>
                </VStack>
            </VStack >
            <VStack spacing="8" width="full" w="full" background="primaryForeground" shadow="lg" borderRadius="xl" px={{ base: "4", md: "12" }} py="8" alignItems="flex-start">
                <Flex alignItems="center" w="full" >
                    <Input
                        placeholder="Apply Coupon Code"
                        value={discountCode}
                        onChange={handleCouponCode}
                        mr="2"
                    />
                    <Button variant="ghost" onClick={applyDiscount} px="8" isDisabled={!discountCode} color="tertiary">
                        Apply
                    </Button>
                </Flex>
            </VStack>
            <Button colorScheme="primary" size="lg" w="full" mt="8" onClick={() => { router.push("/checkout") }} >
                Proceed to Checkout
            </Button>
        </VStack >
    )
}



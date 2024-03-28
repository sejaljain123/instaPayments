import { addDiscount } from "@/lib/reducers/checkoutSlice";
import { Flex, VStack, Input, Button, Box, Text, HStack, Divider, Spacer, FormControl, FormErrorMessage, FormLabel, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SP } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../Common/CustomInput";
import validateInput from "@/utils/validation";
import { type } from "os";
import useCustomToast from "../hooks/useCustomToast";

export default function PriceSummary({ products }: { products: any[] }) {
    const cartTotal = useSelector((state: any) => state.checkout.cartTotal);
    const discountAmount = useSelector((state: any) => state.checkout.discount);
    const shippingFee = useSelector((state: any) => state.checkout.shippingCost);

    const [couponCodeError, setCouponCodeError] = useState("");
    const [discountCode, setDiscountCode] = useState("");

    const totalPrice = cartTotal - discountAmount + shippingFee;
    const dispatch = useDispatch();
    const { successToast } = useCustomToast();

    const router = useRouter();

    const handleCouponCode = (e: any) => {
        setDiscountCode(e.target.value);
    }


    const applyDiscount = () => {
        if (discountCode === "GROWW10") {
            dispatch(addDiscount(10));
            setCouponCodeError("");
            successToast("Success", `Hooraay! You got $${discountAmount} discount on your order`);
        }
        else {
            setCouponCodeError("Invalid Coupon Code");
            dispatch(addDiscount(0));
        }
    }

    return (
        <VStack gap="4" w="full ">
            <VStack spacing="8" width="full" w="full" background="primaryForeground" shadow="lg" borderRadius="xl" px={{ base: "4", md: "8" }} py="8" alignItems="flex-start" >
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
                        <Text>${totalPrice.toFixed(2)}</Text>1
                    </HStack>
                </VStack>
            </VStack >
            <VStack spacing="2" width="full" w="full" background="primaryForeground" shadow="lg" borderRadius="xl" px={{ base: "4", md: "8" }} py="8" alignItems="flex-start">
                <Flex alignItems="center" w="full" justifyContent="center" gap="2">
                    <Input
                        placeholder="Try ' GROWW10 ' for discount"
                        value={discountCode}
                        onChange={handleCouponCode}
                        bg="background"
                        color="foreground"
                        borderColor="primaryForeground"
                        _focus={{ borderColor: "primary.500", outline: "none", border: "1px" }}
                    />
                    <Button variant="outline" onClick={applyDiscount} isDisabled={!discountCode} color="foreground" >
                        Apply
                    </Button>
                </Flex>
                {couponCodeError && <Text color="red.500" fontSize="sm" >{couponCodeError}</Text>}
            </VStack>
            <Button colorScheme="primary" size="lg" w="full" mt="8" onClick={() => { router.push("/checkout") }} >
                Proceed to Checkout
            </Button>
        </VStack >
    )
}



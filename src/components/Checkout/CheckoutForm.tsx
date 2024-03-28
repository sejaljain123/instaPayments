import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, VStack, Text, HStack, Button } from "@chakra-ui/react";
import CustomInput from "../Common/CustomInput";
import PaymentInformation from "./PaymentInformation";
import { FaCartPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingAddress } from "@/lib/reducers/checkoutSlice";
import useCustomToast from "../hooks/useCustomToast";

export default function CheckoutForm() {

    const shippingAddress = useSelector((state: any) => state.checkout.shippingAddress);
    const paymentDetails = useSelector((state: any) => state.checkout.paymentDetails);
    const dispatch = useDispatch();

    const router = useRouter();

    const { errorToast } = useCustomToast();
    const handlePlaceOrder = () => {
        if (!shippingAddress || !paymentDetails) {
            errorToast("Error", "Please fill all the details to place the order");
            return;
        }
        const random = Math.floor(Math.random() * 1000000);
        if (random % 2 === 0)
            router.push("/order-confirmation")
        else
            router.push("/order-failed")
    }

    const handleShippingAddress = (e: any) => {
        dispatch(updateShippingAddress({ shippingAddress: e.target.value }))
    }

    return (
        <Flex w="full" direction="column" gap="8">
            <CustomInput type="shipping address" label="Shipping Address" placeholder="Enter your shipping address" value={shippingAddress} onChange={handleShippingAddress} rightIcon={<EditIcon />} />
            <PaymentInformation />
            <HStack w={{ base: "full", md: "flex-start" }} justifyContent={{ base: "center", md: "flex-start" }} bottom="20">
                <Button variant="outline" size="lg" color="foreground" onClick={() => router.push("/cart")}>Back</Button>
                <Button colorScheme="primary" size="lg" rightIcon={<FaCartPlus />} onClick={handlePlaceOrder} >Place Order</Button>
            </HStack>

        </Flex >
    )
}


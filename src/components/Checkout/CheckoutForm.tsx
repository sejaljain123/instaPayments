import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, VStack, Text, HStack, Button } from "@chakra-ui/react";
import CustomInput from "../Common/CustomInput";
import PaymentInformation from "./PaymentInformation";
import { FaCartPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingAddress } from "@/lib/reducers/checkoutSlice";

export default function CheckoutForm() {

    const shippingAddress = useSelector((state: any) => state.checkout.shippingAddress);
    const dispatch = useDispatch();

    const router = useRouter();

    const handlePlaceOrder = () => {
        router.push("/order-confirmation")
    }

    const handleShippingAddress = (e: any) => {
        dispatch(updateShippingAddress({ shippingAddress: e.target.value }))
    }

    return (
        <Flex w="full" direction="column" gap="8">
            <CustomInput label="Shipping Address" placeholder="Enter your shipping address" value={shippingAddress} onChange={handleShippingAddress} rightIcon={<EditIcon />} />
            <PaymentInformation />
            <HStack w="60%" justifyContent="flex-start" position="fixed" bottom="20">
                <Button variant="outline" size="lg" color="foreground" onClick={() => router.push("/cart")}>Back</Button>
                <Button colorScheme="primary" size="lg" rightIcon={<FaCartPlus />} onClick={handlePlaceOrder} >Place Order</Button>
            </HStack>

        </Flex >
    )
}


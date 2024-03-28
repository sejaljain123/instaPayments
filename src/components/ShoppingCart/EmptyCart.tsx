import { fetchCheckoutDetailsAsync } from "@/lib/reducers/checkoutSlice";
import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

function EmptyCart() {

    const dispatch = useDispatch();
    const handleContinueShopping = () => {
        dispatch(fetchCheckoutDetailsAsync() as any);
    }
    return (
        <Box w="full" height="full">
            <Flex direction="column" gap={2} alignItems="center" justifyContent="center" height="full" >
                <Image src="/images/empty-cart.png" alt="empty-cart" />
                <Text color="foreground" fontSize="lg">Your cart is empty :(</Text>
                <Text color="foreground" fontSize="sm" opacity="0.9">Add some items to get started</Text>
                <Button colorScheme="primary" variant="solid" mt="6" onClick={handleContinueShopping}>Continue Shopping</Button>
            </Flex>
        </Box>
    )
}

export default EmptyCart;
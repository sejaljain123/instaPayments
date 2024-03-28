import { removeItem, updateQuantity } from "@/lib/reducers/checkoutSlice";
import { Flex, HStack, AspectRatio, VStack, Text, Image, IconButton, Box } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import { useDispatch } from "react-redux";

export default function ProductCard({ item }: { item: any }) {

    const dispatch = useDispatch();

    const handleRemove = () => {
        console.log(item.id);
        dispatch(removeItem({ id: item.id }));
    }

    return (
        <Flex width="full" justifyContent="space-between" py="4">
            <HStack width="full" justifyContent="space-between">
                <HStack spacing="2" w="full">
                    <IoClose color="foreground" onClick={handleRemove} cursor="pointer" />
                    <Flex gap="2" alignItems="center" direction={{ base: "column", md: "row" }} flex="1">
                        <AspectRatio ratio={1} width={{ base: "12", md: "20" }} position="relative" >
                            <Image src={item.image} alt="empty-cart" />
                        </AspectRatio>
                        <Text color="foreground" fontSize={{ base: "xs", xl: "md" }} w={{ base: "100%", xl: "70%" }} title={item.title} textAlign={{ base: "center", md: "left" }}>{item.title}</Text>
                    </Flex>
                </HStack>
                <VStack spacing="2" w="full">
                    <Text color="foreground" fontSize={{ base: "xs", md: "md" }} >Qty</Text>
                    <HStack spacing="4" w="full" justifyContent="center">
                        <IconButton icon={<PiMinusBold size="8" />} variant="outline" color="foreground" aria-label="add" size="xs" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} />
                        <Text color="foreground" fontSize={{ base: "xs", md: "md" }} > {item.quantity}</Text>
                        <IconButton icon={<PiPlusBold size="8" />} variant="outline" color="foreground" aria-label="close" size="xs" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} />

                    </HStack>
                </VStack>
                <VStack spacing="2" w="full">
                    <Text color="foreground" fontSize={{ base: "xs", md: "md" }} >Price</Text>
                    <Text color="foreground" fontSize={{ base: "sm", md: "md" }} >${item.price.toFixed(2)}</Text>
                </VStack>
                <VStack spacing="2" w="full">
                    <Text color="foreground" fontSize={{ base: "xs", md: "md" }} >Total Amount</Text>
                    <Text color="foreground" fontSize={{ base: "sm", md: "md" }} >${(item.price * item.quantity).toFixed(2)}</Text>
                </VStack>
            </HStack>
        </Flex >
    );
}
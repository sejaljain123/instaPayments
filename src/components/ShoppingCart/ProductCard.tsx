import { removeItem, updateQuantity } from "@/lib/reducers/checkoutSlice";
import { Flex, HStack, AspectRatio, VStack, Text, Image, IconButton } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import { useDispatch } from "react-redux";

export default function ProductCard({ item }: { item: any }) {

    const dispatch = useDispatch();

    const handleRemove = () => {
        console.log(item.id);
        dispatch(removeItem({ id: item.id }));
    }

    const handleDecreaseQuantity = () => {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
    return (
        <Flex width="full" justifyContent="space-between" py="4">
            <HStack spacing="8" width="full" justifyContent="space-between">
                <HStack spacing="4" w="full">
                    <IoClose color="foreground" onClick={handleRemove} cursor="pointer" />
                    <AspectRatio ratio={1} width="20" position="relative" >
                        <Image src={item.image} alt="empty-cart" />
                    </AspectRatio>
                    <Text color="foreground" fontSize="md" w="50%" title={item.title}>{item.title}</Text>
                </HStack>
                <VStack spacing="2" w="full">
                    <Text color="foreground" fontSize="md" >Qty</Text>
                    <HStack spacing="4" w="full" justifyContent="center">
                        <IconButton icon={<PiMinusBold size="12" />} variant="outline" color="foreground" aria-label="add" size="xs" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} />
                        <Text color="foreground" fontSize="md" > {item.quantity}</Text>
                        <IconButton icon={<PiPlusBold size="12" />} variant="outline" color="foreground" aria-label="close" size="xs" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} />

                    </HStack>
                </VStack>
                <VStack spacing="2" w="full">
                    <Text color="foreground" fontSize="md" >Price</Text>
                    <Text color="foreground" fontSize="md">${item.price}</Text>
                </VStack>
            </HStack>
        </Flex >
    );
}
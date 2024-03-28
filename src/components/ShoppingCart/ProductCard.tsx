import { Tr, Td, IconButton, AspectRatio, Text, Flex, Image, Icon } from '@chakra-ui/react';
import { PiMinusBold, PiPlusBold } from 'react-icons/pi';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '@/lib/reducers/checkoutSlice';
import IItem from '@/interface/common.interface';

export default function ProductTableRow({ item }: { item: IItem }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem({ id: item.id }));
    };

    return (
        <Tr color="foreground" fontSize={{ base: "sm", md: "md" }}>
            <Td>
                <Icon as={IoClose} color="foreground" onClick={handleRemove} cursor="pointer" />
            </Td>
            <Td>
                <Flex gap="4" flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "flex-start", md: "center" }}>
                    <AspectRatio ratio={1} width={{ base: "12", md: "20" }} position="relative">
                        <Image src={item.image} alt="Product Image" />
                    </AspectRatio>
                    <Text color="foreground" fontSize={{ base: "xs", xl: "md" }} w={{ base: "20ch", xl: "50%" }} isTruncated title={item.title} >
                        {item.title}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Flex gap="2" alignItems="center" justifyContent="center">
                    <IconButton icon={<PiMinusBold />} variant="outline" color="foreground" aria-label="Reduce Quantity" size="xs" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} />
                    <Text color="foreground" fontSize={{ base: "xs", md: "md" }}>{item.quantity}</Text>
                    <IconButton icon={<PiPlusBold />} variant="outline" color="foreground" aria-label="Increase Quantity" size="xs" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} />
                </Flex>
            </Td>
            <Td>${item.price.toFixed(2)}</Td>
            <Td>${(item.price * item.quantity).toFixed(2)}</Td>
        </Tr>
    );
}

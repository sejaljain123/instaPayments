import { Box, Flex, Text, Image, Button, HStack, VStack, AspectRatio, Input, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import ProductCard from './ProductCard';

export default function ShoppingCart({ products }: any) {

    return (
        <Box w="full" h="full" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" mt="4">
            <VStack spacing="4" alignItems="flex-start" justifyContent="flex-start" width="full"   >
                {products.map((item: any) => (
                    <Box w="full" key={item.id}>
                        <ProductCard item={item} />
                        <Divider />
                    </Box>
                ))}
            </VStack>
        </Box >
    );
}

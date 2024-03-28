import { Box, Flex, Text, Image, Button, HStack, VStack, AspectRatio, Input, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import ProductCard from './ProductCard';

export default function ShoppingCart({ products }: any) {

    return (
        <Box w="full" h="full" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
            <VStack spacing="4" alignItems="flex-start" justifyContent="flex-start" width="full" mt="8"  >
                {products.map((item: any) => (
                    <><ProductCard item={item} key={item.id} /><Divider /></>
                ))}
            </VStack>
        </Box >
    );
}

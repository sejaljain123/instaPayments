import { Box, Flex, Text, Image, Button, HStack, VStack, AspectRatio, Input, Divider, Table, Tbody, Tr, Th, Td, Thead, TableContainer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import ProductCard from './ProductCard';

export default function ShoppingCart({ products }: any) {
    return (
        <Box w="full" h="full" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" mt="4">
            <TableContainer width="full">
                <Table variant="simple" size="sm" width="full">
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Item</Th>
                            <Th>Qty</Th>
                            <Th>Price</Th>
                            <Th>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody mt="2">
                        {products.map((item: any) => (
                            <ProductCard item={item} key={item.id} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

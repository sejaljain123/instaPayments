import EmptyCart from '@/components/ShoppingCart/EmptyCart';
import PriceSummary from '@/components/ShoppingCart/PriceSummary';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from '@/constants';
import { Flex, Heading, Spinner, VStack } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { fetchCheckoutDetailsAsync } from '@/lib/reducers/checkoutSlice';
import store from '@/lib/store';
import { AsyncThunkAction } from '@reduxjs/toolkit';

export default function Cart() {
    const cartItems = useSelector((state: any) => state.checkout.cartItems);
    const paymentMethods = useSelector((state: any) => state.checkout.paymentMethods);
    const loading = useSelector((state: any) => state.checkout.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCheckoutDetailsAsync() as any); // Dispatch the async thunk once
    }, [dispatch]); // Only run the effect when dispatch changes



    if (loading) {
        return (
            <Flex justifyContent="center" alignItems="center">
                <Spinner size="xl" />
            </Flex>
        )
    }

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    return (
        <Flex direction="column" w="full" >
            <Flex background="background" width="full" flex="1" justifyContent="space-between" gap="20" h="full" p="8">
                <VStack spacing="8" width="full" alignItems="flex-start" >
                    <Heading as="h1" size="2xl" color="foreground">Shopping Cart</Heading>
                    <ShoppingCart products={cartItems} />
                </VStack>
                <PriceSummary products={cartItems} />
            </Flex >
        </Flex >

    )
}
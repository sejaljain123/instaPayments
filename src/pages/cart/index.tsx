import EmptyCart from '@/components/ShoppingCart/EmptyCart';
import PriceSummary from '@/components/ShoppingCart/PriceSummary';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT } from '@/constants';
import { Flex, Heading, Spinner, VStack, Box, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { fetchCheckoutDetailsAsync } from '@/lib/reducers/checkoutSlice';
import { setCacheWithExpiry } from '@/utils/cache';
import Head from 'next/head';
import router from 'next/router';
import { GrPower, GrPowerReset } from 'react-icons/gr';

export default function Cart() {
    const cartItems = useSelector((state: any) => state.checkout.cartItems);
    const paymentMethods = useSelector((state: any) => state.checkout.paymentMethods);
    const loading = useSelector((state: any) => state.checkout.loading);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCheckoutDetailsAsync() as any); // Dispatch the async thunk once
    }, [dispatch]); // Only run the effect when dispatch changes


    const handleRefreshCart = () => {
        setCacheWithExpiry("isItemsCached", false, 60);
        dispatch(fetchCheckoutDetailsAsync() as any);
    }


    if (loading) {
        return (
            <Flex justifyContent="center" alignItems="center">
                <Spinner size="xl" />
            </Flex>
        )
    }
    if (cartItems && cartItems.length === 0 && !loading) {
        return <EmptyCart />;
    }
    return (
        <><Head>
            <title>Cart</title>
            <meta name="description" content="instapayments cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Flex direction="column" w="full" px={{ base: "2", md: "4", xl: "8" }} py="8">
                <Flex justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", lg: "row" }}>
                    <Heading as="h1" size="2xl" color="foreground">Shopping Cart</Heading>
                    <Button color="foreground" variant="outline" mt="6" rightIcon={<GrPowerReset />} onClick={handleRefreshCart}>Refresh Cart</Button>
                </Flex>
                <Flex background="background" width="full" flex="1" justifyContent="space-between" gap={{ base: "8", xl: "20" }} h="full" flexDirection={{ base: "column", lg: "row" }}>
                    <VStack spacing="8" width="full" alignItems={{ base: "center", lg: "flex-start" }}>
                        <ShoppingCart products={cartItems} />
                    </VStack>
                    <Box w={{ base: "full", lg: "40%" }} mt="10">
                        <PriceSummary products={cartItems} />
                    </Box>
                </Flex>
            </Flex >
        </>

    )
}
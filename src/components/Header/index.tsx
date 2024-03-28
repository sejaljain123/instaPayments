import { Flex, Box, Image, Icon } from "@chakra-ui/react"
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from "../../constants"
import { useTheme } from "@chakra-ui/react";
import ThemeSwitcher from "../ThemeSwitcher";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/router";
import { getCacheWithExpiry, setCacheWithExpiry } from "@/utils/cache";
import { fetchCheckoutDetailsAsync } from "@/lib/reducers/checkoutSlice";
import { useDispatch } from "react-redux";

export default function Header() {
    const { icons } = useTheme();
    const router = useRouter();


    return (
        <Flex
            alignItems="center"
            gap={2}
            shadow="md"
            w="100%"
            justify="space-between"
            height={{ base: `${NAVBAR_HEIGHT_MOBILE}px`, lg: `${NAVBAR_HEIGHT}px` }}
            py={7}
            px={{ base: '10', lg: '5', xl: '20' }}
            bg="primaryForeground"
            id="navbar"
        >
            <Image src={icons.logo} alt="main-logo" width={10} height={10} onClick={() => router.push("/cart")} cursor="pointer" />
            <Flex gap="8" alignItems="center">
                <Icon as={FaCartShopping} boxSize={5} color="primary" onClick={() => router.push("/cart")} cursor="pointer" title="refresh cart" />
                <ThemeSwitcher />
            </Flex>
        </Flex >
    );
}


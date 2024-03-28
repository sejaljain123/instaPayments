import { EditIcon } from "@chakra-ui/icons";
import { Flex, VStack, InputGroup, Input, InputRightElement, Text, HStack, useRadioGroup, AspectRatio, Image, Box, Divider, Icon } from "@chakra-ui/react";
import CustomRadioButton from "./CustomRadioButton";
import { useState } from "react";
import CustomInput from "../Common/CustomInput";
import { FaCcMastercard, FaGooglePay } from "react-icons/fa";
import { SiMastercard, SiPaytm, SiPhonepe } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { updatePaymentDetails } from "@/lib/reducers/checkoutSlice";

const UPI_OPTIONS = [
    {
        id: 1,
        name: 'Google Pay',
        icon: FaGooglePay
    },
    {
        id: 2,
        name: 'PhonePe',
        icon: SiPhonepe

    },
    {
        id: 3,
        name: 'Paytm',
        icon: SiPaytm
    }
]
export default function PaymentInformation() {

    const paymentDetails = useSelector((state: any) => state.checkout.paymentDetails);
    const paymentMethods = useSelector((state: any) => state.checkout.paymentMethods);

    console.log(paymentDetails, paymentMethods);


    const [selectedOption, setSelectedOption] = useState('UPI')
    const [selectedUPIOption, setSelectedUPIOption] = useState('Google Pay')

    const dispatch = useDispatch();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'payment-method',
        defaultValue: 'UPI',
        onChange: setSelectedOption
    })

    const { getRadioProps: getRadioProps2 } = useRadioGroup({
        name: 'upi-options',
        defaultValue: 'Google Pay',
        onChange: setSelectedUPIOption
    })
    const group = getRootProps()

    return (
        <Flex w="full" direction="column" gap="8" >
            <Text color="foreground" fontSize="xl" fontWeight="bold" >Payment information</Text>
            <HStack {...group}>
                {paymentMethods.map((value: any) => {
                    const radio = getRadioProps({ value })
                    return (
                        <CustomRadioButton key={value} {...radio}>
                            <AspectRatio ratio={1} width="10" position="relative" >
                                <Image src={value === 'UPI' ? '/images/upi-icon.svg' : '/images/card.svg'} alt="empty-cart" />
                            </AspectRatio>
                        </CustomRadioButton>
                    )
                })}
            </HStack>
            {selectedOption === 'UPI' &&
                <Box w="60%" display="flex" flexDirection="column" gap="8">
                    <Text color="foreground" fontSize="md" fontWeight="bold" >Select UPI App</Text>
                    <HStack spacing="4" >
                        {UPI_OPTIONS.map((option) => {
                            const radio = getRadioProps2({ value: option.name })
                            return (
                                <CustomRadioButton key={option.id} {...radio}>
                                    <AspectRatio ratio={1} width="8" position="relative" >
                                        <Icon as={option.icon} />
                                    </AspectRatio>
                                </CustomRadioButton>

                            )
                        })
                        }
                    </HStack>
                    <HStack spacing="4" >
                        <Divider />
                        <Text color="foreground" fontSize="md" >Or</Text>
                        <Divider />
                    </HStack>
                    <CustomInput label="Enter your VPA" placeholder="Enter UPI ID" value={paymentDetails.upi} onChange={(e: any) => { dispatch(updatePaymentDetails({ upi: e.target.value })) }} />
                </Box>
            }
            {
                selectedOption === 'CARDS' &&
                <VStack spacing="2" alignItems="flex-start" justifyContent="flex-start" width="60%"   >
                    <CustomInput label="Name on Card" placeholder="Type here..." value={paymentDetails.card.name} onChange={(e: any) => { dispatch(updatePaymentDetails({ card: { ...paymentDetails.card, name: e.target.value } })) }} />
                    <CustomInput label="Card Number" placeholder="Type here..." value={paymentDetails.card.cardNumber} onChange={(e: any) => { dispatch(updatePaymentDetails({ card: { ...paymentDetails.card, cardNumber: e.target.value } })) }} rightIcon={<SiMastercard color="gray" />} />
                    <Flex w="full" justifyContent="space-between" gap="10">
                        <CustomInput label="Expiry Date" placeholder="MM/YY" value={paymentDetails.card.expiry} onChange={(e: any) => { dispatch(updatePaymentDetails({ card: { ...paymentDetails.card, expiry: e.target.value } })) }} />
                        <CustomInput label="CVV" placeholder="Type here..." value={paymentDetails.card.cvv} onChange={(e: any) => { dispatch(updatePaymentDetails({ card: { ...paymentDetails.card, cvv: e.target.value } })) }} />
                    </Flex>
                </VStack>
            }
        </Flex >
    )
}


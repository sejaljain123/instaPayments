import { EditIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, VStack, Text } from "@chakra-ui/react";


interface CustomInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rightIcon?: React.ReactNode;
}
export default function CustomInput({ label, placeholder, value, onChange, rightIcon }: CustomInputProps) {
    return (
        <VStack spacing="2" alignItems="flex-start" justifyContent="flex-start" width="full" mt="2"  >
            <Text color="gray.700" fontSize="md" fontWeight="bold" >{label}</Text>
            <InputGroup w="full">
                <Input placeholder={placeholder} value={value} onChange={onChange} py="6" />
                {rightIcon && <InputRightElement py="6">
                    {rightIcon}
                </InputRightElement>}
            </InputGroup>
        </VStack>
    )

}


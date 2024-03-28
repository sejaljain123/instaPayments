import { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, VStack, Text, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import validateInput from "@/utils/validation";

interface CustomInputProps {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rightIcon?: React.ReactNode;
}

export default function CustomInput({ type, label, placeholder, value, onChange, rightIcon }: CustomInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <FormControl isInvalid={!isFocused && value?.length > 1 && !validateInput(type, value)}>
            <VStack spacing="2" alignItems="flex-start" justifyContent="flex-start" width="full" mt="2">
                <FormLabel color="foreground" fontSize="md" fontWeight="bold">{label}</FormLabel>
                <InputGroup w="full">
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        bg="primaryForeground"
                        color="foreground"
                        borderColor="primaryForeground"
                        py="6"
                        _focus={{ borderColor: "primary.500", outline: "none", border: "1px" }}
                    />
                    {rightIcon && <InputRightElement py="6">{rightIcon}</InputRightElement>}
                </InputGroup>
                <FormErrorMessage>Please enter a valid {type}</FormErrorMessage>
            </VStack>
        </FormControl>
    );
}

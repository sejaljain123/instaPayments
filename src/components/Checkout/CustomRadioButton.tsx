import { useRadio, Box, UseRadioProps } from "@chakra-ui/react"

// 1. Create a component that consumes the `useRadio` hook
export default function CustomRadioButton(props: any) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                color='foreground'
                _checked={{
                    bg: 'primary',
                    color: 'primaryForeground',
                    borderColor: 'teal.600',
                }}

                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}


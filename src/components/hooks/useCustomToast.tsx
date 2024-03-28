import { useToast } from '@chakra-ui/react';

function useCustomToast() {
    const toast = useToast();

    const successToast = (title: string, description: string) => {
        toast({
            title,
            description,
            status: 'success',
            duration: 2000,
            position: 'top',
            isClosable: true,
        });
    };

    const errorToast = (title: string, description: string) => {
        toast({
            title,
            description,
            status: 'error',
            duration: 2000,
            position: 'top',
            isClosable: true,
        });
    };

    const infoToast = (title: string, description: string) => {
        toast({
            title,
            description,
            status: 'info',
            duration: 2000,
            position: 'top',
            isClosable: true,
        });
    };

    return { successToast, errorToast, infoToast };
}

export default useCustomToast;

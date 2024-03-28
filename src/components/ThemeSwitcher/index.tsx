// ThemeToggle.js

import React from 'react';
import { Button, Icon, useTheme } from '@chakra-ui/react';
import { toggleTheme } from '@/lib/reducers/themeSlice';
import { useDispatch } from 'react-redux';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const { icons } = useTheme();

    return (
        <Icon onClick={() => dispatch(toggleTheme())} as={icons.themeSwitcher} color="foreground" boxSize={4} cursor="pointer" />
    );
};

export default ThemeSwitcher;

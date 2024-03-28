// ThemeToggle.js

import React from 'react';
import { Button, Icon, useTheme } from '@chakra-ui/react';
import { useThemeContext } from '../../themes/ThemeProvider'

const ThemeSwitcher = () => {
    const { toggleTheme, currentTheme } = useThemeContext();
    const { icons } = useTheme();

    return (
        <Icon onClick={toggleTheme} as={icons.themeSwitcher} color="foreground" boxSize={4} cursor="pointer" />
    );
};

export default ThemeSwitcher;

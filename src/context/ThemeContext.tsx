import React, { createContext, useContext, useState } from 'react';
import { View } from 'react-native';

interface IThemeContext {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<IThemeContext>({
    isDarkMode: false,
    toggleDarkMode: () => undefined
});

export const ThemeProvider = (props: any) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        console.log("🚀 ~ file: ThemeContext.tsx:16 ~ ThemeProvider ~ isDarkMode:", isDarkMode)
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {props.children}
            <View style={{
                backgroundColor: isDarkMode ? '#222' : '#fff',

            }} />
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
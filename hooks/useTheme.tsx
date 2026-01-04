import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface ColorScheme {
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    primary: string;
    success: string;
    warning: string;
    danger: string;
    shadow: string;
    gradient: {
        background: [string, string];
        surface: [string, string];
        primary: [string, string];
        success: [string, string];
        warning: [string, string];
        danger: [string, string];
        muted: [string, string];
        empty: [string, string];
    };
    backgrounds: {
        input: string;
        editInput: string;
    };
    statusBarStyle: 'light-content' | 'dark-content';
}

const lightColors: ColorScheme = {
    background: '#FFFFFF',
    surface: '#F2F2F2',
    text: '#1A1A1A',
    textMuted: '#808080',
    border: '#E6E6E6',
    primary: '#E91E63',
    success: '#4CAF50',
    warning: '#FFC107',
    danger: '#F44336',
    shadow: '#00000029',
    gradient: {
        background: ['#FFFFFF', '#F2F2F2'],
        surface: ['#F2F2F2', '#E6E6E6'],
        primary: ['#FF4081', '#E91E63'],
        success: ['#66BB6A', '#4CAF50'],
        warning: ['#FFA726', '#FFC107'],
        danger: ['#EF5350', '#F44336'],
        muted: ['#BDBDBD', '#808080'],
        empty: ['#E6E6E6', '#E6E6E6'],
    },
    backgrounds: {
        input: '#FFFFFF',
        editInput: '#F9F9F9',
    },
    statusBarStyle: 'dark-content' as const,
};

const darkColors: ColorScheme = {
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textMuted: '#808080',
    border: '#333333',
    primary: '#E91E63',
    success: '#4CAF50',
    warning: '#FFC107',
    danger: '#F44336',
    shadow: '#00000029',
    gradient: {
        background: ['#121212', '#1E1E1E'],
        surface: ['#1E1E1E', '#333333'],
        primary: ['#FF4081', '#E91E63'],
        success: ['#66BB6A', '#4CAF50'],
        warning: ['#FFA726', '#FFC107'],
        danger: ['#EF5350', '#F44336'],
        muted: ['#BDBDBD', '#808080'],
        empty: ['#333333', '#333333'],
    },
    backgrounds: {
        input: '#1E1E1E',
        editInput: '#2C2C2C',
    },
    statusBarStyle: 'light-content' as const,
};


interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    colors: ColorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('darkMode').then((value) => {
            if (value) setIsDarkMode(JSON.parse(value));
        });
    }, []);

    const toggleDarkMode = async () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        await AsyncStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    const colors = isDarkMode ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
            {children}
        </ThemeContext.Provider>
    );
}
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/app/core/navigation/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from '@atomic/obj.theme';

export default function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

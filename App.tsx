import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/app/core/navigation/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from '@atomic/obj.theme';

export default function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <SafeAreaProvider>
        <SafeAreaView />
        <StatusBar style="auto" />
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

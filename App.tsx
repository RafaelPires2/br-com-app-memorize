import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { commonTheme } from '@atomic/obj.theme';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/app/core/navigation/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    'IBMPlexSans-Regular': require('@assets/fonts/IBMPlexSans-Regular.ttf'),
    'IBMPlexSans-Medium': require('@assets/fonts/IBMPlexSans-Medium.ttf'),
    'IBMPlexSans-SemiBold': require('@assets/fonts/IBMPlexSans-SemiBold.ttf'),
    'IBMPlexSans-Bold': require('@assets/fonts/IBMPlexSans-Bold.ttf'),
    'IBMPlexSans-Italic': require('@assets/fonts/IBMPlexSans-Italic.ttf'),
    'IBMPlexSansCondensed-Medium': require('@assets/fonts/IBMPlexSansCondensed-Medium.ttf'),
    'IBMPlexSansCondensed-Bold': require('@assets/fonts/IBMPlexSansCondensed-Bold.ttf'),
    'IBMPlexSansCondensed-SemiBold': require('@assets/fonts/IBMPlexSansCondensed-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return;
  }

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

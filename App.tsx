import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/app/core/navigation/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Routes />
    </SafeAreaProvider>
  );
}

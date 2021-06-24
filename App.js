import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, YellowBox,LogBox } from 'react-native';
import Main from './components/MainComponent';
LogBox.ignoreLogs(['']);

// YellowBox.ignoreWarnings([""]);

export default function App() {
  return (
    <Main />
  );
}



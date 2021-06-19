import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import Main from './components/MainComponent';
YellowBox.ignoreWarnings([""]);

export default function App() {
  return (
    <Main />
  );
}



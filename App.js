import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tailwind from 'tailwind-rn';
import ActionComponent from './components/MainScreen/ActionComponent';
import DescriptionText from './components/MainScreen/DescriptionText';
import Header from './components/MainScreen/Header';
import IntroductoryText from './components/MainScreen/IntroductoryText';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
      <IntroductoryText/>
      <DescriptionText/>
      <ActionComponent/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 30,
    width:"100%"
  },
});

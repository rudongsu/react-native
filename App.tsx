import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <SignUpForm></SignUpForm>
      <StatusBar style="auto" />
    </View>

  );
}




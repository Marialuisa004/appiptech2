import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomePage from './src/home-page';

export default function App() {
  return (
    <>
      <HomePage title="Hello Welcome to my first mobile app" />
      <StatusBar style="auto" />
    </>
  );
}

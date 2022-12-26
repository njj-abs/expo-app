import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import IncreaseCount from './components/IncreaseCount';

export default function App() {
  const [ state, setState ] = useState({ count: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <IncreaseCount {...{state, setState, styles}}></IncreaseCount>
      </SafeAreaProvider>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#525254',
  },
  text:{
    color: '#fff'
  }
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [ state, setState ] = useState({ count: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
      <Text>{state.count}</Text>
      <Button title='IncreaceCount' color={'red'} onPress={() => setState({ count: state.count + 1 })}/>
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

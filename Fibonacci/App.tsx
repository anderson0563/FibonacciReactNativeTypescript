import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [n, setN] = useState("");
  const [fatorial, setFatorial] = useState("");

  const Fatorial = () => {
    let fat: number = 1;
    if(parseInt(n)<2) return(setFatorial(fat.toString()));
    for(let i=2; i<=parseInt(n); i++)
      fat = fat*i;  
    setFatorial(fat.toString());
  }  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe n"
        onChangeText={(text: string) => setN(text)}
        keyboardType="numeric"
      />
      <Text>{fatorial}</Text>
      <Button title="clique aqui" onPress={() => Fatorial()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

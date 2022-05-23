import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity, 
  Text
} from 'react-native'


export function Button({ onPress }){
  return(
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
button: {
  backgroundColor: '#A379F7',
  padding: 10,
  borderRadius: 7,
  alignItems: 'center', //React native: todos os elementos em flex como default 
  marginTop: 20,
},
buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
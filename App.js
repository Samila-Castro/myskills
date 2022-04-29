import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Platform,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';

export default function App() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Samila!
      </Text>
     
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddNewSkill}
        >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginVertical: 30}]}>
        My skills
      </Text>
      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.skill}>{skill}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10, //Customização baseada na plataforma
    marginTop: 30,
    borderRadius: 7,
  },
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
  buttonSkill:{
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 5,
  },
  skill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
 
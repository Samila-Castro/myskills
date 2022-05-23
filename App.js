import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList,
  Platform,
} from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

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
      <Button onPress={handleAddNewSkill}/>
      <Text style={[styles.title, {marginVertical: 30}]}>
        My skills
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item}/>)}
      />
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
});
 
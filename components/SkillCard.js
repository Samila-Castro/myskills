import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export function SkillCard({skill}){
  return(
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.skill}>
          {skill}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill:{
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 15,
  },
  skill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
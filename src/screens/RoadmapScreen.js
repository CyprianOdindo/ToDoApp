import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { generateRoadmap } from '../api';

const RoadmapScreen = () => {
  const [goal, setGoal] = useState('');
  const [roadmap, setRoadmap] = useState('');

  const fetchRoadmap = async () => {
    const result = await generateRoadmap(goal);
    setRoadmap(result);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
        placeholder="Enter your goal"
      />
      <Button title="Generate Roadmap" onPress={fetchRoadmap} />
      <Text style={styles.roadmap}>{roadmap}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
  roadmap: {
    marginTop: 16,
    fontSize: 16,
    color: 'black',
  },
});

export default RoadmapScreen;

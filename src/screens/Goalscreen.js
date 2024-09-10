// GoalScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const GoalScreen = () => {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goalInput.trim()) {
      setGoals([...goals, { key: String(goals.length + 1), text: goalInput, progress: 0 }]);
      setGoalInput('');
    }
  };

  const updateProgress = (goalKey, progress) => {
    setGoals(goals.map(goal =>
      goal.key === goalKey ? { ...goal, progress } : goal
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Goals</Text>
      <TextInput
        style={styles.input}
        value={goalInput}
        onChangeText={setGoalInput}
        placeholder="Enter your goal"
      />
      <Button title="Add Goal" onPress={addGoal} />
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.text}</Text>
            <Text>Progress: {item.progress}%</Text>
            <Button
              title="Increase Progress"
              onPress={() => updateProgress(item.key, Math.min(item.progress + 10, 100))}
            />
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
  goalItem: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  goalText: {
    fontSize: 18,
    color: 'black',
  },
});

export default GoalScreen;

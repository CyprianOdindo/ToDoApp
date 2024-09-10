import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [taskValue, setTaskValue] = useState('');

  const handleAddTask = () => {
    if (taskValue.trim()) {
      onAddTask(taskValue);
      setTaskValue('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={taskValue}
        onChangeText={setTaskValue}
        placeholder="Enter task"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
  },
});

export default TaskInput;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper'; // Using react-native-paper as an alternative

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <Checkbox
        status={task.completed ? 'checked' : 'unchecked'}
        onPress={() => onCompleteTask(task.key)}
      />
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.value}
      </Text>
      <TouchableOpacity onPress={() => onDeleteTask(task.key)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  taskText: {
    flex: 1,
    color: 'black',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteText: {
    color: '#52A7D8',
  },
});

export default TaskItem;

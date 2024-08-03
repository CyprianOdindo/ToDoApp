import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import TaskInput from '../components/TaskInput'; // Adjust the path as necessary
import TaskItem from '../components/TaskItem'; // Adjust the path as necessary

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskValue) => {
    setTasks([
      ...tasks,
      { key: String(tasks.length + 1), value: taskValue, completed: false },
    ]);
  };

  const completeTask = (taskKey) => {
    setTasks(tasks.map(task =>
      task.key === taskKey ? { ...task, completed: true } : task
    ));
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}/>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
          />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
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
});

export default HomeScreen;

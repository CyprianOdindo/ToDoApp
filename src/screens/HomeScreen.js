import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [userXP, setUserXP] = useState(0);
  const [level, setLevel] = useState(1);

  const calculateLevel = (xp) => {
    return Math.floor(xp / 100) + 1; // Example leveling system
  };

  const addTask = (taskValue) => {
    const xp = Math.floor(Math.random() * 50) + 10; // Random XP for demonstration
    setTasks([...tasks, { key: String(tasks.length + 1), value: taskValue, completed: false, xp }]);
  };

  const completeTask = (taskKey) => {
    setTasks(tasks.map(task =>
      task.key === taskKey ? { ...task, completed: true } : task
    ));
    // Add XP when task is completed
    const completedTask = tasks.find(task => task.key === taskKey);
    setUserXP(userXP + completedTask.xp);
    setLevel(calculateLevel(userXP + completedTask.xp));
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <View style={styles.screen}>
      <Button title='GO to Goals'
              onPress={()=>navigation.navigate('Goals')}/>
      <Text style={styles.title}/>
      <Text style={styles.levelText}>Level: {level}</Text>
      <Text style={styles.xpText}>XP: {userXP}</Text>
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
  levelText: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
    color: 'black',
  },
  xpText: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    color: '#52A7D8',
  },
});

export default HomeScreen;

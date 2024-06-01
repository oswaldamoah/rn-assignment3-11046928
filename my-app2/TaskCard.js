import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ name }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskCard;

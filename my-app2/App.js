import React from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import CategoryCard from './CategoryCard';
import TaskCard from './TaskCard';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: './img/exercise.png' },
  { id: '2', name: 'Study', tasks: 8, image: './img/study.png' },
  { id: '3', name: 'Code', tasks: 5, image: './img/code.png' },
  { id: '4', name: 'Cook', tasks: 7, image: './img/cook.png' },
  { id: '5', name: 'Read', tasks: 6, image: './img/read.png' },
  { id: '6', name: 'Meditate', tasks: 4, image: './img/meditation.png' },
  { id: '7', name: 'Clean', tasks: 3, image: './img/clean.png' },
  { id: '8', name: 'Shopping', tasks: 2, image: './img/shop.png' },
];

const ongoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  { id: '4', name: 'Grocery Shopping' },
  { id: '5', name: 'Read a Book' },
  { id: '6', name: 'Meditation' },
  { id: '7', name: 'Yoga' },
  { id: '8', name: 'Clean the House' },
  { id: '9', name: 'Laundry' },
  { id: '10', name: 'Cooking Dinner' },
  { id: '11', name: 'Study Data Structures' },
  { id: '12', name: 'Film YouTube content' },
  { id: '13', name: 'Learn Ga Language' },
  { id: '14', name: 'Biking' },
  { id: '15', name: 'Painting' },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.taskCount}>14 tasks today</Text>
      <SearchBar />
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => <CategoryCard {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <FlatList
        data={ongoingTasks}
        renderItem={({ item }) => <TaskCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f0',
    padding: 20,
  },
  taskCount: {
    marginVertical: 10,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;

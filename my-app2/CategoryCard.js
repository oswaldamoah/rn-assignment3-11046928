import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ name, tasks, image }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={{ uri: image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{name}</Text>
      <Text style={styles.categoryTaskCount}>{tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  categoryTaskCount: {
    color: '#888',
  },
});

export default CategoryCard;

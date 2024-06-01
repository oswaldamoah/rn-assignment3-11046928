import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={24} color="black" />
      <TextInput placeholder="Search" style={styles.searchInput} />
      <Image source={require('./img/filter.png')} style={{ width: 24, height: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default SearchBar;

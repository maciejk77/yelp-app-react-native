import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.backgroundStyle}>
    <Feather name="search" style={styles.iconStyle} />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search"
      style={styles.inputStyle}
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={onTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;

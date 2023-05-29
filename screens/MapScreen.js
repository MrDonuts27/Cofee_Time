import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import SearchBar from '../component/SearchBar';
import { GlobalStyles } from '../styles/GlobalStyles';

const MapScreen = () => {
  
    return (
      <SafeAreaView style={GlobalStyles.SafeAreaViewstyle}>
      <SearchBar/>
  </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
    searchContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
      },
      searchBox: {
        height: 40,
        fontSize: 15,
        borderRadius: 15,
        backgroundColor: '#FFF3C0',
        paddingHorizontal: 16,
      },
    container: {
        flex: 1,
      },
});
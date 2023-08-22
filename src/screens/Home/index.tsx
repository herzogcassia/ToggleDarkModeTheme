import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Toggle from '../../components/Toggle';
import { TesteComponent } from '../../components/TesteComponent';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme()

  const theme = StyleSheet.create(
    {
      container: {
        backgroundColor: isDarkMode ? "black" : "white",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: isDarkMode ? "white" : "gray",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Comic Sans MS"
      }
    })

  const textDescription = () => {
    return isDarkMode ? "dark" : "light"
  }
  return (
    <View style={theme.container}>
      <Toggle />
      <Text style={theme.text}> Dark mode {textDescription()}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

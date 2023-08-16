import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Toggle from '../../components/Toggle';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Toggle />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

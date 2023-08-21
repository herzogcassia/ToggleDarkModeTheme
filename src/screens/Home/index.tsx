import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Toggle from '../../components/Toggle';
import { TesteComponent } from '../../components/TesteComponent';

const Home = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Toggle />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

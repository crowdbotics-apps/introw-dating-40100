import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <StatusBar hidden />
      <Pressable onPress={() => {
      navigation.navigate("signup");
    }}><Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} /></Pressable>
      <Pressable onPress={() => {
      navigation.navigate("signup");
    }}><Text style={styles.title}>Welcome to MyApp</Text></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88E5'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20
  }
});
export default SplashScreen;
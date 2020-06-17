import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from '../constants/colors'
const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingTop: 35,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    color: "black"
  }
});

export default Header;

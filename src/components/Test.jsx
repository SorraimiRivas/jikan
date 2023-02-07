import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
  },

  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "gray",
  },
});

export default Test;

import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function ActionComponent() {
  return (
    <View style={tailwind("items-center w-full")}>
      <TouchableOpacity style={tailwind("w-full items-center")}>
        <View style={tailwind("w-5/12 bg-blue-500 p-4 rounded-md")}>
          <Text style={tailwind("text-center text-lg font-bold text-gray-50")}>
            Press me
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonReset: {
    // elevation:1,
    color: "red",
    backgroundColor: "blue",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    width: "10%",
  },
});

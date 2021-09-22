import React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const IntroductoryText = () => {
  return (
    // <ScrollView>

    <View style={tailwind("py-2 items-center")}>
      <View style={tailwind(" w-9/12 ")}>
        <Text style={tailwind("text-center text-xl")}>Hey Leslee,</Text>
        <Text style={tailwind("text-center text-xl")}>
          there’s a new course about Figma
        </Text>
      </View>
    </View>
    // </ScrollView>
  );
};

export default IntroductoryText;

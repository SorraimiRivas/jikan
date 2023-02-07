import { View, Text } from "react-native";
import React from "react";

const CommonCard = ({ title }) => {
  return (
    <View className="bg-black">
      <Text className="font-bold bg-gray-500">{title}</Text>
    </View>
  );
};

export default CommonCard;

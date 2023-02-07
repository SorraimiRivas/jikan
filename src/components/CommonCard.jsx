import { View, Text, Image } from "react-native";
import React from "react";

const CommonCard = ({ title }) => {
  return (
    <View className="h-56 w-32 rounded m-5">
      <Image className="w-full h-4/5 bg-white rounded" />
      <Text className="font-bold bg-zinc-500  rounded">{title}</Text>
    </View>
  );
};

export default CommonCard;

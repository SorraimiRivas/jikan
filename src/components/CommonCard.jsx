import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "@rneui/themed";

const CommonCard = ({ title, image }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert("pressed");
      }}
      className="h-32 w-20 m-2"
    >
      <View className="w-full h-4/5 border border-gray-500">
        <Image
          containerStyle={{
            height: "100%",
            width: "100%",
            borderWidth: 1,
            borderColor: "white",
          }}
          source={{ uri: `${image}` }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Text className="font-normal text-xs overflow-ellipsis h-1/5 w-full">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonCard;

import { View, Text, FlatList, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import CommonCard from "./src/components/CommonCard";
import axios from "axios";
import Test from "./src/components/Test";

const App = () => {
  const [results, setResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const getAnimeList = async () => {
    await axios
      .request({
        method: "GET",
        baseURL: "https://api.jikan.moe/v4",
        url: "/anime",
        params: {
          limit: 1,
          order_by: "name",
        },
      })
      .then((res) => {
        setResults(res.data.data);
        // setIsLoading(true);
      });
  };

  // const Loader = () => {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // };

  useEffect(() => {
    // setIsLoading(true);
    getAnimeList();

    return;
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-blue-300 h-full w-full">
      <CommonCard title="Hellow" />
      <Test />
      {/* <FlatList
        numColumns={2}
        data={results}
        keyExtractor={(item, index) => `${item.id + index.toString()}`}
        renderItem={({ item }) => (
          <CommonCard className="m-4 h-8 w-5 bg-red-900" title={item.title} />
        )}
      /> */}
    </SafeAreaView>
  );
};

export default App;

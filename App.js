import {
  View,
  FlatList,
  SafeAreaView,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useCallback, memo } from "react";
import CommonCard from "./src/components/CommonCard";
// import CommonCardSkeleton from "./src/components/CommonCardSkeleton";
import axios from "axios";
import SkeletonCard from "./src/components/SkeletonCommonCard";

const App = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { width, height } = useWindowDimensions();

  const getAnimeList = async () => {
    await axios
      .request({
        method: "GET",
        baseURL: "https://api.jikan.moe/v4",
        url: "/manga",
        params: {
          limit: 10,
          page,
          order_by: "popularity",
        },
      })
      .then((res) => {
        setResults([...results, ...res.data.data]);
        setIsLoading(true);
      });
  };

  const LoadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, [setPage]);

  useEffect(() => {
    // setIsLoading(true);
    getAnimeList();
  }, [page]);

  return (
    <SafeAreaView
      style={{ width: width, height: height }}
      className="flex-1 flex items-center bg-blue-300"
    >
      {/* <CommonCardSkeleton /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        numColumns={4}
        data={results}
        keyExtractor={(item, index) => `${item.id + index.toString()}`}
        renderItem={({ item }) => (
          <CommonCard title={item.title} image={item.images.jpg.image_url} />
        )}
        onEndReached={LoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default App;

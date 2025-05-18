import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Link, router, useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "../../components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { getTrendingMovie } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovie,
    loading: trendingLoading,
    error: trendiingError,
  } = useFetch(getTrendingMovie);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute  w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError || trendiingError ? (
          <Text>Error:{moviesError?.message || trendiingError?.message}</Text>
        ) : (
          <View className="flex-1, mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeHolder="Search for a movie"
            />

            {trendingMovie && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Movie
                </Text>
              </View>
            )}

            <>
              <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={()=>
                <View className="w-4" />
              }
                data={trendingMovie}
                renderItem={({ item, index }) => (
                  <TrendingCard movie={item} index={index}/>
                )}
                keyExtractor={(item) => item.movie_id.toString()}
              />

              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

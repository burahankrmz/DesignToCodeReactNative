import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import VerticalSpacer from "../../components/VerticalSpacer";
import { MaterialIcons } from "@expo/vector-icons";
import SearchField from "./components/SearchField";
import CategoryButtonList from "./components/CategoryButtonList";
import PopularLocations from "./components/PopularLocations";
import RecommendedLocations from "./components/RecommendedLocations";
import { PopularLocation } from "../../app/types";
import HomeBottomBar from "./components/HomeBottomBar";

const dimensions = Dimensions.get("window");

export default function HomeScreen({ navigation }: any) {
  function popularLocationItemTapHandler(popularLocationItem: PopularLocation) {
    navigation.navigate("Details", popularLocationItem);
  }

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View style={{height: dimensions.height - 75}}>
        <ScrollView style={styles.container}>
          <VerticalSpacer height={44} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Explore</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="location-pin" size={16} color="#196EEE" />
              <Text style={styles.aspenUSAText}>Aspen, USA</Text>
              <MaterialIcons name="expand-more" size={16} color="#196EEE" />
            </View>
          </View>
          <Text style={styles.locationText}>Aspen</Text>
          <VerticalSpacer height={24} />
          <SearchField placeHolder="Find things to do" />
          <VerticalSpacer height={32} />
          <CategoryButtonList />
          <VerticalSpacer height={32} />
          <PopularLocations onPressCard={popularLocationItemTapHandler} />
          <VerticalSpacer height={32} />
          <RecommendedLocations />
        </ScrollView>
      </View>
      <HomeBottomBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  appBarText: {
    color: "#000000",
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  locationText: {
    color: "#000000",
    fontFamily: "Montserrat_500Medium",
    fontSize: 32,
  },
  aspenUSAText: {
    fontSize: 12,
    fontWeight: "400",
    marginHorizontal: 6,
  },
});

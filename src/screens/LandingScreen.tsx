import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import VerticalSpacer from "../components/VerticalSpacer";

export default function LandingScreen({navigation}: any) {

  function onBtnPress() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/splash_image.png")} style={styles.backgroundImage}>
        <VerticalSpacer height={93} />
        <Text style={styles.title}>Aspen</Text>
        <VerticalSpacer height={334} />
        <Text style={styles.description}>Plan your</Text>
        <Text style={styles.luxuriusText}>Luxurious Vacation</Text>
        <VerticalSpacer height={24} />
        <TouchableOpacity onPress={onBtnPress}>
          <View style={styles.exploreBtn}>
            <Text style={styles.exploreText}>Explore</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch", // or 'stretch',
    justifyContent: "flex-start",
    paddingHorizontal: 32
  },
  title: {
    color: "white",
    fontSize: 116,
    fontFamily: "Hiatus",
    alignSelf: "center"
  },
  description: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontSize: 24
  },
  luxuriusText: {
    color: "white",
    fontFamily: "Montserrat_500Medium",
    fontSize: 40,
  },
  exploreBtn: {
    backgroundColor: "#196EEE",
    paddingVertical: 16,
    paddingHorizontal: 127,
    borderRadius: 16
  },
  exploreText: {
    color: 'white',
    alignSelf:'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

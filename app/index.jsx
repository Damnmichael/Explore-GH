import { Redirect, Router, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground source={require("../assets/images/onboarding1.png")}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full h-full justify-end px-12 pb-28 ">
            <Text className="font-mbold text-4xl text-white ">
              Explore Ghana
            </Text>
            <Text className="font-mbold text-sm text-white ">
              Easily navigate Ghana with the help of the ideal traveling
              companion.{" "}
            </Text>
            <CustomButton
              title="Continue with email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>

        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

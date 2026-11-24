import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    async function esconderBarra() {
      if (Platform.OS === "android") {
        try {
          if (typeof NavigationBar.setVisibilityAsync === "function") {
            await NavigationBar.setVisibilityAsync("hidden");
          }
        } catch (error) {
          console.log("Não foi possível ocultar a barra:", error);
        }
      }
    }

    esconderBarra();
  }, []);

  return (
    <>
      <StatusBar hidden />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#101827",
          },
        }}
      />
    </>
  );
}
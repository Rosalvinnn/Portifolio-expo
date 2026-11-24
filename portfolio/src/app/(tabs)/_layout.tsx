import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#65D9F5",
        tabBarInactiveTintColor: "#718096",
        tabBarStyle: {
          backgroundColor: "#172337",
          borderTopColor: "#26374D",
          height: 75,
          paddingBottom: 18,
          paddingTop: 9,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="sobre" options={{ title: "Sobre" }} />
      <Tabs.Screen name="academica" options={{ title: "Acadêmica" }} />
      <Tabs.Screen name="profissional" options={{ title: "Profissional" }} />
      <Tabs.Screen name="projetos" options={{ title: "Projetos" }} />
      <Tabs.Screen name="jogo" options={{ title: "Jogo" }} />
    </Tabs>
  );
}
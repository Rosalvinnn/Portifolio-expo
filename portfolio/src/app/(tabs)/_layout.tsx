
import { Tabs } from "expo-router";
import { Text } from "react-native";

const icons: Record<string, string> = {
  index: "⌂",
  sobre: "◉",
  academica: "▤",
  profissional: "▣",
  projetos: "◇",
  jogo: "♧",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#65D9F5",
        tabBarInactiveTintColor: "#718096",
        tabBarStyle: {
          backgroundColor: "#172337",
          borderTopColor: "#26374D",
          height: 75,
          paddingBottom: 10,
          paddingTop: 7,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
        tabBarIcon: ({ color }) => (
          <Text style={{ color, fontSize: 21 }}>
            {icons[route.name] ?? "•"}
          </Text>
        ),
      })}
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

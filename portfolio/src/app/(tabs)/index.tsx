
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Screen, Card, COLORS } from "../../components/UI";

export default function Home() {
  const router = useRouter();

  const shortcuts = [
    { title: "Sobre mim", icon: "person-outline", route: "/sobre" },
    { title: "Experiência acadêmica", icon: "school-outline", route: "/academica" },
    { title: "Experiência profissional", icon: "briefcase-outline", route: "/profissional" },
    { title: "Meus projetos", icon: "code-slash-outline", route: "/projetos" },
    { title: "Jogar Forca", icon: "game-controller-outline", route: "/jogo" },
  ] as const;

  return (
    <Screen>
      <View style={styles.top}>
        <Text style={styles.logo}>ROSALVO.</Text>

        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>PORTFÓLIO 2026</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>OLÁ, SEJA BEM-VINDO!</Text>

        <Text style={styles.name}>
          Transformando ideias em{" "}
          <Text style={styles.highlight}>soluções digitais.</Text>
        </Text>

        <Text style={styles.description}>
          Sou estudante de Ciência da Computação, interessado em
          desenvolvimento de software, tecnologia e inovação.
        </Text>

        <View style={styles.codeBox}>
          <Text style={styles.codeComment}>// Um pouco sobre mim</Text>

          <Text style={styles.code}>
            <Text style={{ color: "#C792EA" }}>const </Text>
            desenvolvedor = {"{"}{"\n"}
            {"  "}nome: <Text style={{ color: "#C3E88D" }}>"Rosalvo"</Text>,{"\n"}
            {"  "}foco: <Text style={{ color: "#C3E88D" }}>"Software"</Text>,{"\n"}
            {"  "}status: <Text style={{ color: "#C3E88D" }}>"Aprendendo"</Text>{"\n"}
            {"}"};
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/projetos")}
        >
          <Text style={styles.buttonText}>Conhecer meus projetos</Text>
        </Pressable>
      </View>

      <Text style={styles.section}>EXPLORE MEU PORTFÓLIO</Text>

      {shortcuts.map((item) => (
        <Pressable
          key={item.route}
          onPress={() => router.push(item.route)}
        >
          <Card style={styles.shortcut}>
            <View style={styles.shortcutIcon}>
            </View>

            <Text style={styles.shortcutText}>{item.title}</Text>
          </Card>
        </Pressable>
      ))}

      <Text style={styles.footer}>
        DESENVOLVIDO COM REACT NATIVE + EXPO
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 45,
  },
  logo: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 2,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: COLORS.success,
  },
  statusText: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  hero: {
    marginBottom: 38,
  },
  eyebrow: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 16,
  },
  name: {
    color: COLORS.white,
    fontSize: 39,
    lineHeight: 47,
    fontWeight: "900",
    letterSpacing: -1.5,
    marginBottom: 18,
  },
  highlight: {
    color: COLORS.primary,
  },
  description: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 25,
  },
  codeBox: {
    backgroundColor: "#0B1220",
    padding: 19,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 22,
  },
  codeComment: {
    color: "#718096",
    fontSize: 12,
    marginBottom: 13,
  },
  code: {
    color: COLORS.white,
    fontSize: 13,
    lineHeight: 23,
    fontFamily: "monospace",
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "#101827",
    fontSize: 13,
    fontWeight: "800",
  },
  section: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 17,
  },
  shortcut: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 11,
  },
  shortcutIcon: {
    backgroundColor: "#263D53",
    padding: 10,
    borderRadius: 11,
  },
  shortcutText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "600",
    flex: 1,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 9,
    textAlign: "center",
    letterSpacing: 1.2,
    marginTop: 25,
  },
});

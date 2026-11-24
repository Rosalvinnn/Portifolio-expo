
import { Text, View, StyleSheet } from "react-native";
import {
  Screen,
  Header,
  Card,
  SectionTitle,
  Paragraph,
  TagList,
  COLORS,
} from "../../components/UI";

export default function Sobre() {
  return (
    <Screen>
      <Header
        eyebrow="01 / SOBRE MIM"
        title="Quem sou eu?"
        description="Conheça um pouco da minha trajetória e das tecnologias que fazem parte do meu aprendizado."
      />

      <Card>
        <Text style={styles.name}>Rosalvo</Text>
        <Text style={styles.role}>
          Estudante de Ciência da Computação
        </Text>

        <Paragraph>
          Sou estudante de Ciência da Computação e tenho interesse em
          desenvolvimento de software, programação e tecnologia.
          Ao longo da minha formação, venho desenvolvendo projetos
          acadêmicos e independentes, explorando diferentes linguagens,
          ferramentas e conceitos da computação.
        </Paragraph>

        <View style={styles.line} />

        <Paragraph>
          Gosto de transformar problemas em soluções práticas,
          aprender novas tecnologias e desenvolver aplicações que
          possam gerar impacto positivo na vida das pessoas.
        </Paragraph>
      </Card>

      <SectionTitle>Linguagens de programação</SectionTitle>
      <Card>
        <TagList items={[
          "JavaScript", "Python", "Java", "C", "SQL"
        ]} />
      </Card>

      <SectionTitle>Desenvolvimento web e mobile</SectionTitle>
      <Card>
        <TagList items={[
          "HTML", "CSS", "React", "Next.js",
          "React Native", "Expo", "Expo Router", "Node.js"
        ]} />
      </Card>

      <SectionTitle>Banco de dados</SectionTitle>
      <Card>
        <TagList items={[
          "SQL", "Modelagem MER", "Normalização",
          "Back4App", "Parse Server"
        ]} />
      </Card>

      <SectionTitle>Hardware e robótica</SectionTitle>
      <Card>
        <TagList items={[
          "Arduino", "Raspberry Pi", "RFID",
          "GPIO", "Eletrônica"
        ]} />
      </Card>

      <SectionTitle>Ferramentas e conceitos</SectionTitle>
      <Card>
        <TagList items={[
          "Git", "GitHub", "GitHub Actions", "CI/CD",
          "VS Code", "Vercel", "Playwright",
          "Estruturas de Dados", "POO", "Inteligência Artificial"
        ]} />
      </Card>

      <SectionTitle>Tecnologias deste aplicativo</SectionTitle>
      <Card>
        <Paragraph>
          Este portfólio foi desenvolvido utilizando React Native e Expo,
          com navegação pelo Expo Router. A interface utiliza componentes
          nativos, estilos com StyleSheet, gerenciamento de estado com
          Hooks e ícones da biblioteca Expo Vector Icons.
        </Paragraph>

        <View style={styles.tags}>
          {[
            "React Native",
            "Expo",
            "Expo Router",
            "TypeScript",
            "StyleSheet",
            "useState",
            "Ionicons",
            "React Hooks",
            "ScrollView",
            "Pressable"
          ].map((item) => (
            <View key={item} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  name: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 5,
  },
  role: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 17,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 15,
  },
  tag: {
    backgroundColor: "#263D53",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  tagText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "600",
  },
});

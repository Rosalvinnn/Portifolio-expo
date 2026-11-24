
import { View, Text, StyleSheet } from "react-native";
import {
  Screen,
  Header,
  Card,
  SectionTitle,
  Paragraph,
  COLORS,
} from "../../components/UI";

const experiences = [
  {
    title: "Desenvolvimento de software",
    description:
      "Criação e manutenção de aplicações, organização de código e resolução de problemas.",
  },
  {
    title: "Integração de tecnologias",
    description:
      "Comunicação entre sistemas web, serviços de backend, bancos de dados e dispositivos físicos.",
  },
  {
    title: "Testes e qualidade",
    description:
      "Experiência com testes automatizados e validação de funcionalidades.",
  },
  {
    title: "Trabalho em equipe",
    description:
      "Participação em projetos colaborativos, divisão de tarefas e utilização de ferramentas de versionamento.",
  },
];

export default function Profissional() {
  return (
    <Screen>
      <Header
        eyebrow="03 / TRAJETÓRIA"
        title="Experiência profissional"
        description="Minha evolução prática no desenvolvimento de software e na construção de soluções tecnológicas."
      />

      <Card>
        <Text style={styles.badge}>DESENVOLVIMENTO INDEPENDENTE</Text>

        <Text style={styles.title}>Desenvolvedor de projetos</Text>

        <Text style={styles.subtitle}>
          Projetos acadêmicos e pessoais
        </Text>

        <Paragraph>
          Desenvolvimento de aplicações e protótipos utilizando
          diferentes linguagens e tecnologias, desde a construção
          de interfaces até a integração com bancos de dados e hardware.
        </Paragraph>

        <View style={styles.line} />

        <Text style={styles.label}>PRINCIPAIS ATIVIDADES</Text>

        {[
          "Desenvolvimento de aplicações web e mobile.",
          "Construção de interfaces utilizando React e Next.js.",
          "Integração entre aplicações e bancos de dados.",
          "Implementação de testes automatizados.",
          "Desenvolvimento de soluções envolvendo Raspberry Pi e Arduino.",
          "Utilização de GitHub e pipelines de CI/CD.",
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>▹</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </Card>

      <SectionTitle>Competências desenvolvidas</SectionTitle>

      {experiences.map((item) => (
        <Card key={item.title}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Paragraph>{item.description}</Paragraph>
        </Card>
      ))}

      <Card style={styles.finalCard}>
        <Text style={styles.finalTitle}>Em constante evolução.</Text>
        <Paragraph>
          Busco oportunidades para aplicar meus conhecimentos,
          desenvolver novas habilidades e contribuir com projetos
          que envolvam tecnologia e inovação.
        </Paragraph>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  badge: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 14,
  },
  title: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 7,
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 12,
    marginBottom: 18,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 18,
  },
  label: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.3,
    marginBottom: 15,
  },
  listItem: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 13,
  },
  bullet: {
    color: COLORS.primary,
    fontSize: 20,
  },
  listText: {
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 21,
    flex: 1,
  },
  itemTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  finalCard: {
    borderColor: "#38647B",
  },
  finalTitle: {
    color: COLORS.primary,
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 12,
  },
});
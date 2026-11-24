
import { View, Text, StyleSheet } from "react-native";
import {
  Screen,
  Header,
  Card,
  SectionTitle,
  Paragraph,
  COLORS,
} from "../../components/UI";

const subjects = [
  {
    title: "Programação",
    description: "Lógica de programação, Python, C, Java e JavaScript.",
  },
  {
    title: "Orientação a objetos",
    description: "Desenvolvimento utilizando classes, objetos, encapsulamento e conceitos de POO.",
  },
  {
    title: "Estruturas de dados",
    description: "Estudo e implementação de estruturas de dados lineares.",
  },
  {
    title: "Banco de dados",
    description: "Modelagem de dados, diagramas MER, SQL e normalização.",
  },
  {
    title: "Inteligência Artificial",
    description: "Estudo de inteligência de enxames, incluindo algoritmos ACO e PSO.",
  },
  {
    title: "Robótica",
    description: "Projetos utilizando Arduino, Raspberry Pi, sensores e componentes eletrônicos.",
  },
  {
    title: "Engenharia de Software",
    description: "Desenvolvimento de aplicações, testes, rastreabilidade e práticas de CI/CD.",
  },
];

export default function Academica() {
  return (
    <Screen>
      <Header
        eyebrow="02 / FORMAÇÃO"
        title="Experiência acadêmica"
        description="Minha formação, conhecimentos e experiências desenvolvidas durante a graduação."
      />

      <Card>
        <Text style={styles.date}>FORMAÇÃO SUPERIOR</Text>
        <Text style={styles.course}>Ciência da Computação</Text>
        <Text style={styles.institution}>
          Universidade Católica de Pernambuco — UNICAP
        </Text>

        <View style={styles.line} />

        <Text style={styles.status}>Em andamento</Text>

        <Paragraph>
          Graduação voltada ao desenvolvimento de soluções computacionais,
          abrangendo programação, estruturas de dados, engenharia de
          software, banco de dados e inteligência artificial.
        </Paragraph>
      </Card>

      <SectionTitle>Conhecimentos desenvolvidos</SectionTitle>

      {subjects.map((item, index) => (
        <Card key={item.title}>
          <View style={styles.heading}>
            <View style={styles.number}>
              <Text style={styles.numberText}>
                {String(index + 1).padStart(2, "0")}
              </Text>
            </View>

            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>

          <Paragraph>{item.description}</Paragraph>
        </Card>
      ))}

      <SectionTitle>Objetivo acadêmico</SectionTitle>

      <Card>
        <Paragraph>
          Continuar aprofundando meus conhecimentos em desenvolvimento
          de software, explorando novas tecnologias e aplicando os
          conceitos aprendidos em projetos práticos.
        </Paragraph>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  date: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  course: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 8,
  },
  institution: {
    color: COLORS.text,
    fontSize: 13,
    marginBottom: 15,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 15,
  },
  status: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 12,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  number: {
    backgroundColor: "#263D53",
    padding: 9,
    borderRadius: 8,
  },
  numberText: {
    color: COLORS.primary,
    fontWeight: "800",
    fontSize: 12,
  },
  itemTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
});

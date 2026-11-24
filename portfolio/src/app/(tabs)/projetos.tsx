
import { View, Text, StyleSheet } from "react-native";
import {
  Screen,
  Header,
  Card,
  SectionTitle,
  Paragraph,
  TagList,
  COLORS,
} from "../../components/UI";

const projects = [
  {
    number: "01",
    title: "UNICAP Conecta",
    category: "DESENVOLVIMENTO WEB E HARDWARE",
    description:
      "Sistema de comunicação de apoio para elevadores universitários. A solução integra uma central web de atendimento, chamadas acionadas por botões físicos e dispositivos Raspberry Pi.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Raspberry Pi",
      "PeerJS",
      "WebRTC",
      "Back4App",
    ],
  },
  {
    number: "02",
    title: "Controle de Acesso RFID",
    category: "ROBÓTICA E AUTOMAÇÃO",
    description:
      "Projeto de controle de acesso utilizando identificação por cartões RFID, Arduino e acionamento de mecanismo motorizado para abertura de uma porta.",
    technologies: [
      "Arduino",
      "C/C++",
      "RFID",
      "MFRC522",
      "EEPROM",
      "Motor DC",
    ],
  },
  {
    number: "03",
    title: "Banco de Dados de Clínica",
    category: "BANCO DE DADOS",
    description:
      "Projeto acadêmico de modelagem de banco de dados para uma clínica, envolvendo levantamento de entidades, relacionamentos, modelo MER, SQL e normalização.",
    technologies: [
      "SQL",
      "MER",
      "Modelagem",
      "Normalização",
    ],
  },
  {
    number: "04",
    title: "Inteligência de Enxames",
    category: "INTELIGÊNCIA ARTIFICIAL",
    description:
      "Estudo de algoritmos inspirados no comportamento coletivo da natureza, explorando otimização por colônia de formigas e enxame de partículas.",
    technologies: [
      "ACO",
      "PSO",
      "Inteligência Artificial",
      "Otimização",
    ],
  },
  {
    number: "05",
    title: "Aplicações Web",
    category: "DESENVOLVIMENTO WEB",
    description:
      "Desenvolvimento de aplicações e interfaces web utilizando componentes reutilizáveis, organização de código e tecnologias modernas do ecossistema JavaScript.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "06",
    title: "Jogo da Forca",
    category: "LÓGICA DE PROGRAMAÇÃO",
    description:
      "Jogo interativo com seleção aleatória de palavras, controle de tentativas, identificação de letras e condições de vitória e derrota. Nesta versão, implementado nativamente em React Native.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React Native",
      "Expo",
      "Hooks",
    ],
  },
];

export default function Projetos() {
  return (
    <Screen>
      <Header
        eyebrow="04 / PORTFÓLIO"
        title="Meus projetos"
        description="Uma seleção de projetos acadêmicos e independentes que representam minha evolução na programação e na tecnologia."
      />

      <View style={styles.counter}>
        <Text style={styles.counterNumber}>06</Text>

        <View>
          <Text style={styles.counterTitle}>
            Projetos apresentados
          </Text>
          <Text style={styles.counterSubtitle}>
            Conhecimento colocado em prática
          </Text>
        </View>
      </View>

      <SectionTitle>Projetos em destaque</SectionTitle>

      {projects.map((project) => (
        <Card key={project.number}>
          <View style={styles.projectHeader}>
            <Text style={styles.number}>{project.number}</Text>
            <Text style={styles.category}>{project.category}</Text>
          </View>

          <Text style={styles.title}>{project.title}</Text>

          <Paragraph>{project.description}</Paragraph>

          <View style={styles.divider} />

          <Text style={styles.technologies}>
            TECNOLOGIAS UTILIZADAS
          </Text>

          <TagList items={project.technologies} />
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    backgroundColor: "#192F43",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#35516A",
    marginBottom: 25,
  },
  counterNumber: {
    color: COLORS.primary,
    fontSize: 36,
    fontWeight: "900",
  },
  counterTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
  },
  counterSubtitle: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 5,
  },
  projectHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
    gap: 8,
  },
  number: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "900",
  },
  category: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.7,
    flexShrink: 1,
    textAlign: "right",
  },
  title: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 17,
  },
  technologies: {
    color: COLORS.primary,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 13,
  },
});

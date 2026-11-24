
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  type ReactNode,
  type StyleProp,
  type ViewStyle,
} from "react-native";

export const COLORS = {
  background: "#101827",
  card: "#19283B",
  cardLight: "#22344B",
  primary: "#65D9F5",
  white: "#F4F7FB",
  text: "#B9C7D8",
  muted: "#8294A9",
  border: "#2B3D52",
  success: "#55D6A0",
};

type ScreenProps = {
  children: ReactNode;
};

export function Screen({ children }: ScreenProps) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

type HeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function Header({
  eyebrow,
  title,
  description,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

type CardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

type ChipProps = {
  children: ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{children}</Text>
    </View>
  );
}

type ParagraphProps = {
  children: ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return <Text style={styles.paragraph}>{children}</Text>;
}

type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <View style={styles.tags}>
      {items.map((item, index) => (
        <Chip key={`${item}-${index}`}>{item}</Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -1,
    marginBottom: 12,
  },
  description: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 19,
    marginBottom: 15,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 12,
  },
  paragraph: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 23,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },
  chip: {
    backgroundColor: "#263D53",
    borderRadius: 8,
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#35516A",
  },
  chipText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "600",
  },
});


import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import {
  Screen,
  Header,
  Card,
  COLORS,
} from "../../components/UI";

const WORDS = [
  "JAVASCRIPT",
  "PROGRAMACAO",
  "COMPUTADOR",
  "TECNOLOGIA",
  "ALGORITMO",
  "DESENVOLVIMENTO",
  "PYTHON",
  "REACT",
  "ROBOTICA",
  "SOFTWARE",
  "INTERNET",
  "BANCODEDADOS",
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;

function getRandomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function Jogo() {
  const [word, setWord] = useState<string>(getRandomWord);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState<number>(0);

  const won = word.split("").every((letter) =>
    usedLetters.includes(letter)
  );

  const lost = errors >= MAX_ERRORS;
  const finished = won || lost;

  function selectLetter(letter: string) {
    if (finished || usedLetters.includes(letter)) return;

    setUsedLetters((previous) => [...previous, letter]);

    if (!word.includes(letter)) {
      setErrors((previous) => previous + 1);
    }
  }

  function restartGame() {
    let nextWord = getRandomWord();

    while (nextWord === word) {
      nextWord = getRandomWord();
    }

    setWord(nextWord);
    setUsedLetters([]);
    setErrors(0);
  }

  function renderHangman() {
    return (
      <View style={styles.drawing}>
        <View style={styles.base} />
        <View style={styles.post} />
        <View style={styles.topBeam} />
        <View style={styles.rope} />

        {errors >= 1 && <View style={styles.head} />}
        {errors >= 2 && <View style={styles.body} />}
        {errors >= 3 && <View style={styles.leftArm} />}
        {errors >= 4 && <View style={styles.rightArm} />}
        {errors >= 5 && <View style={styles.leftLeg} />}
        {errors >= 6 && <View style={styles.rightLeg} />}
      </View>
    );
  }

  return (
    <Screen>
      <Header
        eyebrow="05 / MINI GAME"
        title="Jogo da Forca"
        description="Teste seus conhecimentos de programação e tente descobrir a palavra antes que suas tentativas acabem."
      />

      <Card style={styles.gameCard}>
        <View style={styles.gameHeader}>
          <Text style={styles.gameLabel}>
            DESAFIO DE PROGRAMAÇÃO
          </Text>

          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {MAX_ERRORS - errors} tentativas
            </Text>
          </View>
        </View>

        {renderHangman()}

        <View style={styles.wordContainer}>
          {word.split("").map((letter, index) => {
            const revealed =
              usedLetters.includes(letter) || lost;

            return (
              <View key={index} style={styles.letterBox}>
                <Text style={styles.letter}>
                  {revealed ? letter : ""}
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.instruction}>
          {finished
            ? won
              ? "Parabéns! Você acertou a palavra!"
              : "Fim de jogo! Tente novamente."
            : "Escolha uma letra no teclado abaixo."}
        </Text>

        {finished && (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              {won ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!"}
            </Text>

            {!won && (
              <Text style={styles.answer}>
                A palavra era: {word}
              </Text>
            )}

            <Pressable
              style={styles.restart}
              onPress={restartGame}
            >
              <Text style={styles.restartText}>
                Jogar novamente
              </Text>
            </Pressable>
          </View>
        )}
      </Card>

      <Text style={styles.keyboardTitle}>TECLADO</Text>

      <Card>
        <View style={styles.keyboard}>
          {ALPHABET.map((letter) => {
            const used = usedLetters.includes(letter);
            const correct = used && word.includes(letter);
            const incorrect = used && !word.includes(letter);

            return (
              <Pressable
                key={letter}
                disabled={used || finished}
                onPress={() => selectLetter(letter)}
                style={[
                  styles.key,
                  correct && styles.correctKey,
                  incorrect && styles.incorrectKey,
                  used && styles.disabledKey,
                ]}
              >
                <Text
                  style={[
                    styles.keyText,
                    used && styles.disabledKeyText,
                  ]}
                >
                  {letter}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Card>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            {usedLetters.length}
          </Text>
          <Text style={styles.statLabel}>Letras usadas</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{errors}</Text>
          <Text style={styles.statLabel}>Erros</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{MAX_ERRORS}</Text>
          <Text style={styles.statLabel}>Limite</Text>
        </View>
      </View>

      <Pressable
        style={styles.newGame}
        onPress={restartGame}
      >
        <Text style={styles.newGameText}>
          ↻ Reiniciar jogo
        </Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  gameCard: {
    padding: 16,
  },
  gameHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gameLabel: {
    color: COLORS.primary,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  counter: {
    backgroundColor: "#263D53",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },
  counterText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "700",
  },
  drawing: {
    height: 215,
    width: 230,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
  },
  base: {
    position: "absolute",
    bottom: 12,
    left: 22,
    width: 180,
    height: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  post: {
    position: "absolute",
    bottom: 15,
    left: 58,
    height: 190,
    width: 5,
    backgroundColor: COLORS.primary,
  },
  topBeam: {
    position: "absolute",
    top: 10,
    left: 58,
    height: 5,
    width: 105,
    backgroundColor: COLORS.primary,
  },
  rope: {
    position: "absolute",
    top: 13,
    left: 160,
    width: 3,
    height: 30,
    backgroundColor: COLORS.primary,
  },
  head: {
    position: "absolute",
    top: 40,
    left: 146,
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  body: {
    position: "absolute",
    top: 69,
    left: 159,
    width: 4,
    height: 55,
    backgroundColor: COLORS.white,
  },
  leftArm: {
    position: "absolute",
    top: 77,
    left: 137,
    width: 30,
    height: 4,
    backgroundColor: COLORS.white,
    transform: [{ rotate: "-40deg" }],
  },
  rightArm: {
    position: "absolute",
    top: 77,
    left: 157,
    width: 30,
    height: 4,
    backgroundColor: COLORS.white,
    transform: [{ rotate: "40deg" }],
  },
  leftLeg: {
    position: "absolute",
    top: 117,
    left: 139,
    width: 30,
    height: 4,
    backgroundColor: COLORS.white,
    transform: [{ rotate: "-45deg" }],
  },
  rightLeg: {
    position: "absolute",
    top: 117,
    left: 158,
    width: 30,
    height: 4,
    backgroundColor: COLORS.white,
    transform: [{ rotate: "45deg" }],
  },
  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    marginVertical: 20,
  },
  letterBox: {
    width: 27,
    height: 39,
    borderBottomWidth: 3,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "800",
  },
  instruction: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 20,
  },
  result: {
    backgroundColor: "#263D53",
    padding: 15,
    borderRadius: 12,
    marginTop: 18,
    alignItems: "center",
  },
  resultText: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: "900",
  },
  answer: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 8,
  },
  restart: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 9,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  restartText: {
    color: COLORS.background,
    fontWeight: "800",
    fontSize: 12,
  },
  keyboardTitle: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 14,
    marginTop: 10,
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 7,
  },
  key: {
    width: 39,
    height: 43,
    borderRadius: 9,
    backgroundColor: "#263D53",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#35516A",
  },
  keyText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "800",
  },
  correctKey: {
    backgroundColor: "#155B48",
    borderColor: COLORS.success,
  },
  incorrectKey: {
    backgroundColor: "#63303B",
    borderColor: "#A64D5D",
  },
  disabledKey: {
    opacity: 0.7,
  },
  disabledKeyText: {
    color: "#A0AAB7",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    color: COLORS.primary,
    fontSize: 23,
    fontWeight: "900",
  },
  statLabel: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 5,
  },
  newGame: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  newGameText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 13,
  },
});
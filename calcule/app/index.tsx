import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {

  const [idade, setIdade] = useState("");
  const [ano, setAno] = useState<number | null>(null);

  function calcularAno(idadeDigitada: string) {

    setIdade(idadeDigitada);

    const idadeNumero = Number(idadeDigitada);

    if (!isNaN(idadeNumero)) {
      const anoAtual = new Date().getFullYear();
      setAno(anoAtual - idadeNumero);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Descubra o ano em que oi:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={calcularAno}
      />

      {ano && (
        <Text>Você nasceu em {ano}</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  titulo: {
    fontSize: 20,
    marginBottom: 10
  },

  input: {
    borderWidth: 1,
    padding: 10
  }
});
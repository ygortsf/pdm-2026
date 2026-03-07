import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform 
} from "react-native";
import { useState } from "react";

export default function Index() {

  const [idade, setIdade] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [anoNascimento, setAnoNascimento] = useState<number | null>(null);

  function calcularAno(novaIdade: string, novoDia: string, novoMes: string) {

    const idadeNum = Number(novaIdade);
    const diaNum = Number(novoDia);
    const mesNum = Number(novoMes);

    if (!idadeNum || !diaNum || !mesNum) {
      setAnoNascimento(null);
      return;
    }

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    let ano = anoAtual - idadeNum;

    if (mesNum > mesAtual || (mesNum === mesAtual && diaNum > diaAtual)) {
      ano = ano - 1;
    }

    setAnoNascimento(ano);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <View>

        <Text style={styles.titulo}>
          Descubra o ano em que nasceu
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={(v) => {
            setIdade(v);
            calcularAno(v, dia, mes);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Dia de nascimento"
          keyboardType="numeric"
          value={dia}
          onChangeText={(v) => {
            setDia(v);
            calcularAno(idade, v, mes);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Mês de nascimento"
          keyboardType="numeric"
          value={mes}
          onChangeText={(v) => {
            setMes(v);
            calcularAno(idade, dia, v);
          }}
        />

        {anoNascimento && (
          <Text style={styles.resultado}>
            Ano de nascimento: {anoNascimento}
          </Text>
        )}

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  titulo: {
    fontSize: 22,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },

  resultado: {
    fontSize: 20,
    marginTop: 20
  }

});
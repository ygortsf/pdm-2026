import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import InfoModal from "../componentes/InfoModal";

export default function Profile() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/images/ygor.png")}
        style={styles.image}
      />

      <Text style={styles.name}>Ygor de Tárcio</Text>

      <Text style={styles.description}>
        Olá, me chamo Ygor de Tárcio, tenho 21 anos e atualmente sou estudante
        do curso Sistemas para Internet na Universidade Católica de Pernambuco.
        {"\n\n"}
        Este app foi criado para a disciplina de Programação para Dispositivos Móveis.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Ver mais sobre mim</Text>
      </TouchableOpacity>

      <InfoModal
        visible={visible}
        onClose={() => setVisible(false)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 22,
  },
  button: {
    marginTop: 25,
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
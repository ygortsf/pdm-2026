import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function InfoModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>

          <Text style={styles.title}>⭐⭐Mais sobre mim ⭐⭐</Text>

          <Text style={styles.item}>🎬 Filme preferido: Interestelar</Text>
          <Text style={styles.item}>🎵 Música que mais escuto: meia-noite</Text>
          <Text style={styles.item}>🤔 Curiosidade: Programo melhor de madrugada e também sou bem eclético</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#1e1e1e",
    padding: 25,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  item: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
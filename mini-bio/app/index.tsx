import { Text, View } from "react-native";
import Profile from "@/components/Profile";

export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    }}
    >
      <Text style={{fontSize: 20, fontWeight:"bold", color: "white"}}>
      App criado para a
      disciplina Programação para Dispositivos Móveis
      </Text>
      
      <Profile/>
    </View>
  );
}

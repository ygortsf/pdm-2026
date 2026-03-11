import { Text, View } from "react-native";
import { Image } from "expo-image";


export default function Profile() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    }}
    >
   <Image
   source={require("../assets/images/ygor.png")}
   style={{width: 200, height: 200, borderRadius: 50}}
   />
   <Text style={{fontSize: 30, fontWeight: 'bold', color: "white"}}>Ygor de Tárcio</Text>
<Text style={{fontSize: 18, marginTop: 19, marginLeft: 25, color: "white"}}>Olá, me chamo Ygor de Tárcio, tenho 21 anos e atualmente sou estudante
    do curso Sistemas para Internet na Universidade Católica de Pernambuco.
   </Text>
    </View>
  );
}

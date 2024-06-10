import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.link} href='/settings'>see settings</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  link : {
    backgroundColor : 'blue',
    color : 'white',
    padding : 10,
    borderRadius : 15
}
})
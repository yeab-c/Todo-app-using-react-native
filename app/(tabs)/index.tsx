import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const {toggleDarkMode} = useTheme();

  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.content}>Whatttttt!</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    fontSize:24,
  }


});
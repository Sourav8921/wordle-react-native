import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from '@/assets/images/wordle-icon.svg'
import { FrankRuhlLibre_800ExtraBold } from "@expo-google-fonts/frank-ruhl-libre";
import { Link } from "expo-router";

export default function Index () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon width={100} height={100} />
        <Text style={styles.title}>Wordle</Text>
        <Text style={styles.text}>Get six chances to guess a 5-letter word.</Text>
      </View>
      <View style={styles.menu}>
        <Link href={'/game'}>
          <TouchableOpacity>
            <Text>Play</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Made by Sourav</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    gap: 50,
  },
  header: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: "FrankRuhlLibre_800ExtraBold",
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: "FrankRuhlLibre_500Medium",
  },
  menu: {},
  footer: {},
})

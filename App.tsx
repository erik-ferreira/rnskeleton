import { StatusBar } from "expo-status-bar"
import { Image, View, Text, useWindowDimensions } from "react-native"
import ContentLoader, { Circle } from "react-content-loader/native"

import { styles } from "./styles"

export default function App() {
  const { width, height } = useWindowDimensions()

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <ContentLoader
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#444"
        foregroundColor="#999"
      >
        <Circle cx="32" cy="32" r="32" />
      </ContentLoader>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://github.com/erik-ferreira.png" }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>Erik Ferreira</Text>
        </View>
      </View>
    </View>
  )
}

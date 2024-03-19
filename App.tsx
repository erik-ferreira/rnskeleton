import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { Image, View, Text, useWindowDimensions } from "react-native"
import ContentLoader, { Circle, Rect } from "react-content-loader/native"

import { styles } from "./styles"

export default function App() {
  const { width, height } = useWindowDimensions()

  const [isLoading, setIsLoading] = useState(true)

  const widthAnimated = useSharedValue(0)
  const heightAnimated = useSharedValue(0)
  const opacityAnimated = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthAnimated.value,
      height: heightAnimated.value,
      opacity: opacityAnimated.value,
    }
  })

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      widthAnimated.value = withTiming(200, {
        duration: 500,
        easing: Easing.linear,
      })
      heightAnimated.value = withTiming(80, {
        duration: 500,
        easing: Easing.linear,
      })
      opacityAnimated.value = withTiming(1, {
        duration: 500,
        easing: Easing.linear,
      })
    }
  }, [isLoading])

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      {isLoading ? (
        <ContentLoader
          viewBox={`0 0 ${width} ${height}`}
          backgroundColor="#444"
          foregroundColor="#999"
        >
          <Circle cx="36" cy="38" r="36" />

          <Rect x="80" y="17" rx="4" ry="4" width={30} height={12} />
          <Rect x="80" y="40" rx="4" ry="4" width={200} height={14} />
        </ContentLoader>
      ) : (
        <Animated.View style={[styles.header, animatedStyle]}>
          <Image
            source={{ uri: "https://github.com/erik-ferreira.png" }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.greeting}>Olá</Text>
            <Text style={styles.username}>Erik Ferreira</Text>
          </View>
        </Animated.View>
      )}
    </View>
  )
}

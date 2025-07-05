import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import ThemedLogo from "../components/ThemedLogo"
import Spacer from "../components/Spacer"
import ThemedButton from "../components/ThemedButton"
import { Colors } from '../constants/Colors'

const Home = () => {
  const router = useRouter()

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />

      <ThemedButton onPress={() => router.push('/login')} style={styles.button}>
        <MaterialIcons name="login" size={24} color="white" />
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </ThemedButton>

      <ThemedButton onPress={() => router.push('/register')} style={styles.button}>
        <MaterialIcons name="person-add" size={24} color="white" />
        <ThemedText style={styles.buttonText}>Register</ThemedText>
      </ThemedButton>

      <ThemedButton onPress={() => router.push('/profile')} style={styles.button}>
        <MaterialIcons name="person" size={24} color="white" />
        <ThemedText style={styles.buttonText}>Profile</ThemedText>
      </ThemedButton>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '60%', // Adjust width as needed for equal spacing
  },
  buttonText: {
    marginLeft: 10,
    color: 'white',
  },
})
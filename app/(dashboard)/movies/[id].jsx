import { StyleSheet, Text } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { useMovies } from "../../../hooks/useMovies"
import { Colors } from "../../../constants/Colors"

// themed components
import ThemedText from "../../../components/ThemedText"
import ThemedButton from "../../../components/ThemedButton"
import ThemedView from "../../../components/ThemedView"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedLoader from "../../../components/ThemedCard"


const MovieDetails = () => {
  const [movie, setMovie] = useState(null)

  const { id } = useLocalSearchParams()
  const { fetchMovieById, deleteMovie } = useMovies()
  const router = useRouter()

  const handleDelete = async () => {
    await deleteMovie(id)
    setMovie(null)
    router.replace('/movies')
  }

  useEffect(() => {
    async function loadMovie() {
      const movieData = await fetchMovieById(id)
      setMovie(movieData)
    }

    loadMovie()

    return () => setMovie(null)
  }, [id])

  if (!movie) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{movie.title}</ThemedText>
        <ThemedText>Produced by {movie.producer}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Movie description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{movie.description}</ThemedText>
      </ThemedCard>

      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Movie</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
})

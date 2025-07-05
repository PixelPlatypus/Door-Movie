import { createContext, useEffect, useState } from "react"
import { databases, client } from "../lib/appwrite"
import { ID, Permission, Query, Role } from "react-native-appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID
const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID

export const MoviesContext = createContext()

export function MoviesProvider({children}) {
  const [movies, setMovies] = useState([])
  const { user } = useUser()

  async function fetchMovies() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID, 
        COLLECTION_ID,
        [
          Query.equal('userId', user.$id)
        ]
      )

      setMovies(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchMovieById(id) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )

      return response
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createMovie(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, userId: user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteMovie(id) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    let unsubscribe
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

    if (user) {
      fetchMovies()

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response
        console.log(events)

        if (events[0].includes("create")) {
          setMovies((prevMovies) => [...prevMovies, payload])
        }

        if (events[0].includes("delete")) {
          setMovies((prevMovies) => prevMovies.filter((movie) => movie.$id !== payload.$id))
        }
      })

    } else {
      setMovies([])
    }

    return () => {
      if (unsubscribe) unsubscribe()
    }

  }, [user])

  return (
    <MoviesContext.Provider 
      value={{ movies, fetchMovies, fetchMovieById, createMovie, deleteMovie }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

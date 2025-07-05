import { useContext } from "react"
import { MoviesContext } from "../contexts/MoviesContext"

export function useMovies() {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider")
  }

  return context
}
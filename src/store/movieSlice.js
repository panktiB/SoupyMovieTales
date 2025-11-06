import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        movie => movie.id !== action.payload
      )
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  setMovies,
  addToFavorites,
  removeFromFavorites,
  setLoading,
  setError,
} = moviesSlice.actions

export default moviesSlice.reducer

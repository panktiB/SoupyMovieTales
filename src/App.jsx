import { useSelector, useDispatch } from 'react-redux'
import { setMovies, addToFavorites } from './store/movieSlice'

function App() {
  const dispatch = useDispatch()
  const { movies, favorites } = useSelector(state => state.movies)

  const testRedux = () => {
    dispatch(
      setMovies([
        { id: 1, title: 'Inception' },
        { id: 2, title: 'The Dark Knight' },
      ])
    )
  }

  const addFavorite = () => {
    dispatch(addToFavorites({ id: 1, title: 'Inception' }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold">IMDb React App</h1>
      <p className="text-gray-400 mt-2">Redux is working!</p>

      <div className="mt-4 space-x-2">
        <button onClick={testRedux} className="bg-blue-600 px-4 py-2 rounded">
          Load Movies
        </button>
        <button
          onClick={addFavorite}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Add to Favorites
        </button>
      </div>

      <div className="mt-4">
        <p>Movies: {movies.length}</p>
        <p>Favorites: {favorites.length}</p>
      </div>
    </div>
  )
}

export default App

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
    <div className="h-lvh app-container">
        hello
    </div>
  )
}

export default App

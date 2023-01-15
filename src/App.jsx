import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import Shows from './pages/shows/Shows'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/shows' element={<Shows />} />
      </Routes>
    </div>
  )
}

export default App

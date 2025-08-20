
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom"
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {
  //components always starts w the cap letter and returns something in html
  //and return one root element or use fragments <> </>



  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
  <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/favorites' element={<Favorites />}/>
  </Routes>

</main>
 </MovieProvider>

  )
}



export default App

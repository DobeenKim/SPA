import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Ramen from './components/Ramen'
import Snack from './components/Snack'


function App() {
  const [page, setPage] = useState('Home')

  return (
    <>
    <Navigation updateNavigation={setPage}/>
      {page === "Home" && <Home  />}
      {page === "Ramen" && <Ramen  />}
      {page === "Snack" && <Snack  />}
    </>
  )
}

export default App

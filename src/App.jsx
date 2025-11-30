import 'bootstrap/dist/css/bootstrap.min.css'
import AllTheBooks from "./components/AllTheBooks/AllTheBooks"
import MyFooter from "./components/MyFooter/MyFooter"
import MyNav from "./components/MyNav/MyNav"
import Welcome from "./components/Welcome/Welcome"
import { useState, useContext } from 'react'
import { ThemeContext } from './components/ThemeContext/ThemeContext'



const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`app app-${theme}`}>
      <MyNav
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Welcome />

      <AllTheBooks
        searchQuery={searchQuery}/>

      <MyFooter />
    </div>
  )
}

export default App

// App.jsx
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import AppLayout from "./components/AppLayout/AppLayout"
import HomePage from "./pages/HomePage"
import BookDetails from "./pages/BookDetails"


const App = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          }
        >
          <Route
            path="/"
            element={<HomePage searchQuery={searchQuery} />}
          />

          <Route
            path="book/:asin"
            element={<BookDetails />} />

          <Route
            path="*"
            element={
              <div className="p-5 text-center">
                <h2>404</h2>
                <p>Pagina non trovata.</p>
              </div>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

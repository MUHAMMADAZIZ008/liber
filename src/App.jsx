import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/layouts/hero/hero'
import MainLayout from './components/layouts/main-layout/main_layout'
import Ruknlar from './components/layouts/ruknlar/ruknlar'
import Sections from './components/layouts/sections/sections'
import Home from './page/home'
import Book from './components/book/book'

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path='book-details/:id' element={<Book />}/>
      </Route>
    </Routes>
  </>)
}

export default App

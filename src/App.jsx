import './App.css'
import Hero from './components/layouts/hero/hero'
import MainLayout from './components/layouts/main-layout/main_layout'
import Ruknlar from './components/layouts/ruknlar/ruknlar'
import Sections from './components/layouts/sections/sections'

function App() {

  return (<>
    <MainLayout>
      <Hero />
      <Ruknlar/>
      <Sections/>
    </MainLayout>
</>)
}

export default App

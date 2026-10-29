import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Votacao from './pages/Votacao.jsx'
import './App.css'
import Resultado from './pages/Resultado.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/votacao" element={<Votacao />} />
        <Route path="/resultado" element={<Resultado />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

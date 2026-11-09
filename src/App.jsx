import { Routes, Route } from 'react-router'
import './App.css'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import VagaPage from './pages/VagaPage'
import CadastroPage from './pages/CadastroPage'
import NaoEncontradaPage from './pages/NaoEncontradaPage'

// App só define as rotas. O Layout envolve todas elas (Header e Footer).
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/vagas/:id" element={<VagaPage />} />
        <Route path="/publicar" element={<CadastroPage />} />
        <Route path="*" element={<NaoEncontradaPage />} />
      </Route>
    </Routes>
  )
}

export default App

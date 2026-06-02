import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import Produto from './components/produto/produto'
import CadastrarProduto from './components/cadastrarProduto/CadastrarProduto'
import ListarProduto from './components/listarProduto/ListarProduto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/perfil' element={<Perfil />}/>
        <Route path='/cadastrarProduto' element={<CadastrarProduto />}/>
        <Route path='/listarProduto' element={<ListarProduto />}/>
        <Route path='/produto' element={<Produto />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

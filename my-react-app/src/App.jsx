import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import News from './components/News'
import Depoimentos from './components/Depoimentos'
import Vagas from './components/Vagas'

import vagas from './data/vagas'

function App() {
  return (
    <>
      
    <Header></Header>
    <Hero
      titulo="As melhores vagas em startups de tecnologia"
      subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
    >
      <button id="btn-hero" className="btn">Publicar vaga $299</button>
    </Hero>

    <main className="conteudo">
      <Vagas vagas={vagas} />
    </main>

    <News></News>
    <Depoimentos></Depoimentos>
    <Footer></Footer>
    
    </>
  )
}

export default App

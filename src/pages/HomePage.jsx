import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Hero from '../components/Hero'
import Vagas from '../components/Vagas'
import News from '../components/News'
import Depoimentos from '../components/Depoimentos'
import { buscarVagas } from '../services/vagasService'

function HomePage() {
  const [vagas, setVagas] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  // busca as vagas uma vez, quando a home aparece na tela ([] = sem dependências)
  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarVagas()
        setVagas(dados)
      } catch {
        setErro('Não foi possível carregar as vagas. Tente novamente mais tarde.')
      } finally {
        // roda dando certo ou errado: o carregamento terminou
        setCarregando(false)
      }
    }

    carregar()
  }, [])

  return (
    <>
      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
      >
        <Link to="/publicar" id="btn-hero" className="btn">Publicar vaga $299</Link>
      </Hero>

      <main className="conteudo">
        {carregando && <p className="aviso">Carregando vagas...</p>}

        {erro && <p className="aviso erro">{erro}</p>}

        {!carregando && !erro && <Vagas vagas={vagas} />}
      </main>

      <News />
      <Depoimentos />
    </>
  )
}

export default HomePage

import Hero from '../components/Hero'
import Vagas from '../components/Vagas'
import News from '../components/News'
import Depoimentos from '../components/Depoimentos'

// TODO (passo 3): buscar as vagas da API pelo vagasService
import vagas from '../data/vagas'

function HomePage() {
  return (
    <>
      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
      >
        <button id="btn-hero" className="btn">Publicar vaga $299</button>
      </Hero>

      <main className="conteudo">
        <Vagas vagas={vagas} />
      </main>

      <News />
      <Depoimentos />
    </>
  )
}

export default HomePage

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { buscarVaga } from '../services/vagasService'

function VagaPage() {
  // pega o :id da URL (/vagas/3 -> id = "3")
  const { id } = useParams()

  const [vaga, setVaga] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  // busca de novo sempre que o id da URL mudar
  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarVaga(id)
        setVaga(dados)
      } catch {
        setErro('Não foi possível carregar a vaga. Tente novamente mais tarde.')
      } finally {
        setCarregando(false)
      }
    }

    carregar()
  }, [id])

  if (carregando) {
    return (
      <section className="hero">
        <p>Carregando vaga...</p>
      </section>
    )
  }

  if (erro) {
    return (
      <section className="hero">
        <p className="erro">{erro}</p>
        <Link to="/">Voltar para as vagas</Link>
      </section>
    )
  }

  // buscarVaga devolve undefined quando o id não existe (ex.: /vagas/999)
  if (!vaga) {
    return (
      <section className="hero">
        <h2>Vaga não encontrada</h2>
        <p>Não existe nenhuma vaga com o código {id}.</p>
        <Link to="/">Voltar para as vagas</Link>
      </section>
    )
  }

  return (
    <section className="hero vaga-detalhe">
      <small>{vaga.empresa}</small>
      <h2>{vaga.cargo}</h2>

      <div className="vaga-detalhe__badges">
        <span className="vagas__badge">{vaga.salario}</span>
        <span className="vagas__badge vagas__badge--highlight">{vaga.modelo}</span>
        <span className="vagas__badge">{vaga.tipo}</span>
        <span className="vagas__badge">{vaga.area}</span>
      </div>

      <p>{vaga.descricao}</p>

      <Link to="/">Voltar para as vagas</Link>
    </section>
  )
}

export default VagaPage

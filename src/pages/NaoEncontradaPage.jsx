import { Link } from 'react-router'

// Qualquer URL que não bate com nenhuma rota cai aqui (path="*")
function NaoEncontradaPage() {
  return (
    <section className="hero">
      <h2>Página não encontrada</h2>
      <p>O endereço que você abriu não existe.</p>
      <Link to="/" className="btn">Voltar para a home</Link>
    </section>
  )
}

export default NaoEncontradaPage

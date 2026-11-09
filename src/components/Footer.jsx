import { Link } from 'react-router'

function Footer() {
  return (
    <footer>
      <p>
        <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
      </p>

      <nav>
        <Link to="/">Vagas</Link>
        <Link to="/publicar">Publicar vaga</Link>
      </nav>
    </footer>
  )
}

export default Footer

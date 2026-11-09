import { Link } from 'react-router'

function Header() {
  return (
    <header>
      <h1>
        <Link to="/" className="logo">OpenBoard</Link>
      </h1>
      <div>
        {/* link externo: pode continuar como <a href> */}
        <a id="link-google" href="http://google.com">Entrar</a>
        <Link to="/publicar" className="btn">Publicar vaga $299</Link>
      </div>
    </header>
  )
}

export default Header

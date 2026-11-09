import { useState } from 'react'
import Hero from './Hero'

function News(){
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState('');
    const [enviado, setEnviado] = useState(false);

    function handleSubmit(e) {
        e.preventDefault(); // não recarrega a página
        if (!email.includes('@')) {
            setErro('Digite um e-mail válido.');
            return;
        }
        setErro('');
        setEnviado(true);
  }
        return(
        <>
        <Hero
        titulo="Vagas novas, toda quinta-feira"
        subtitulo= "Um resumo curto das melhores vagas em startups direto no seu inbox."
        >
        {enviado ? (
            <p className="sucesso">Pronto! Enviaremos para {email}.</p>

        ) : ( 
            <div className="cadastro">
             <form onSubmit={handleSubmit} noValidate>
              <input type="email" placeholder="seu@mail.com" 
               value={email}
               onChange={(e) => setEmail(e.target.value)} />
              <button className="btn">Assinar</button>
             </form>
             {erro && <p className="erro">{erro}</p>}
            </div>
        )}
        </Hero>
        </>
    )
}

export default News
import { useState } from 'react'
import { Link } from 'react-router'
import VagaCard from '../components/VagaCard'

const MODELOS = ['Remoto', 'Híbrido', 'Presencial']
const TIPOS = ['Efetivo', 'Estágio', 'Temporário']
const AREAS = ['Engenharia', 'Design', 'Gestão']

// valores iniciais do formulário (os selects já começam na 1ª opção)
const FORM_INICIAL = {
  empresa: '',
  cargo: '',
  salario: '',
  modelo: MODELOS[0],
  tipo: TIPOS[0],
  area: AREAS[0],
  descricao: '',
}

function CadastroPage() {
  const [form, setForm] = useState(FORM_INICIAL)
  const [erro, setErro] = useState('')
  const [vagaPublicada, setVagaPublicada] = useState(null)

  // um único handler para todos os campos:
  // o "name" do campo diz qual propriedade do form deve mudar
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // não recarrega a página

    // algum campo vazio (ou só com espaços)?
    const temCampoVazio = Object.values(form).some((valor) => valor.trim() === '')
    if (temCampoVazio) {
      setErro('Preencha todos os campos antes de publicar.')
      return // não envia; o que foi digitado continua no form
    }

    setErro('')
    setVagaPublicada({ ...form, id: Date.now(), publicada: 'agora' })
  }

  // depois de publicar: o formulário some e aparece o card da vaga
  if (vagaPublicada) {
    return (
      <section className="hero">
        <h2>Vaga publicada!</h2>
        <p className="sucesso">Sua vaga já está no ar. Confira como ela aparece na lista:</p>

        <div className="cadastro-card">
          <VagaCard
            id={vagaPublicada.id}
            empresa={vagaPublicada.empresa}
            cargo={vagaPublicada.cargo}
            salario={vagaPublicada.salario}
            modelo={vagaPublicada.modelo}
            publicada={vagaPublicada.publicada}
          />
        </div>

        <Link to="/">Voltar para as vagas</Link>
      </section>
    )
  }

  return (
    <section className="hero">
      <h2>Publicar vaga</h2>
      <p>Preencha os dados da vaga. Todos os campos são obrigatórios.</p>

      <form className="formulario" onSubmit={handleSubmit} noValidate>
        <label>
          Empresa
          <input type="text" name="empresa" value={form.empresa} onChange={handleChange} />
        </label>

        <label>
          Cargo
          <input type="text" name="cargo" value={form.cargo} onChange={handleChange} />
        </label>

        <label>
          Salário
          <input type="text" name="salario" placeholder="Ex.: R$ 8k-12k" value={form.salario} onChange={handleChange} />
        </label>

        <label>
          Modelo
          <select name="modelo" value={form.modelo} onChange={handleChange}>
            {MODELOS.map((modelo) => (
              <option key={modelo} value={modelo}>{modelo}</option>
            ))}
          </select>
        </label>

        <label>
          Tipo
          <select name="tipo" value={form.tipo} onChange={handleChange}>
            {TIPOS.map((tipo) => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </label>

        <label>
          Área
          <select name="area" value={form.area} onChange={handleChange}>
            {AREAS.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </label>

        <label>
          Descrição
          <textarea name="descricao" rows="4" value={form.descricao} onChange={handleChange} />
        </label>

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" className="btn">Publicar vaga</button>
      </form>
    </section>
  )
}

export default CadastroPage

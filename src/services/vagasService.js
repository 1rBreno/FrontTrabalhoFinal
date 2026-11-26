// Todas as chamadas à "API" de vagas ficam aqui.
// Nenhum componente ou página chama fetch direto: eles usam estas funções.

const URL_VAGAS = '/api/vagas.json'

// Busca a lista completa de vagas
export async function buscarVagas() {
  const res = await fetch(URL_VAGAS)

  // res.ok é false quando o servidor responde com erro (ex.: 404)
  if (!res.ok) {
    throw new Error('Não foi possível carregar as vagas.')
  }

  return res.json()
}

// Busca uma vaga pelo id.
// Devolve undefined quando não existe vaga com esse id.
export async function buscarVaga(id) {
  const vagas = await buscarVagas()

  // o id da URL chega como texto ("3"), por isso o Number()
  return vagas.find((vaga) => vaga.id === Number(id))
}

import { useState, useEffect } from "react"
import VagaCard from "./VagaCard"

const TIPOS = ["Efetivo", "Estágio", "Temporário"]
const AREAS = ["Engenharia", "Design", "Gestão"]

function Vagas({ vagas }) {
  const [tiposMarcados, setTiposMarcados] = useState([])
  const [areasMarcadas, setAreasMarcadas] = useState([])

  // marca ou desmarca um item da lista
  function alternar(lista, setLista, valor) {
    if (lista.includes(valor)) {
      setLista(lista.filter((item) => item !== valor))
    } else {
      setLista([...lista, valor])
    }
  }

  function limpar() {
    setTiposMarcados([])
    setAreasMarcadas([])
  }

  // grupo sem nada marcado não filtra
  const vagasFiltradas = vagas.filter((vaga) => {
    const tipoOk = tiposMarcados.length === 0 || tiposMarcados.includes(vaga.tipo)
    const areaOk = areasMarcadas.length === 0 || areasMarcadas.includes(vaga.area)
    return tipoOk && areaOk
  })

  const total = vagasFiltradas.length

  // título da aba acompanha o contador; roda de novo sempre que o total muda
  useEffect(() => {
    document.title = `${total} vagas | OpenBoard`
  }, [total])

  return (
    <>
      <section className="vagas">
        <div className="vagas__header">
          <h2>Últimas Vagas</h2>
          <span>{total} vagas - Atualizado agora</span>
        </div>

        {vagasFiltradas.map((vaga) => (
          <VagaCard
            key={vaga.id}
            id={vaga.id}
            empresa={vaga.empresa}
            cargo={vaga.cargo}
            salario={vaga.salario}
            modelo={vaga.modelo}
            publicada={vaga.publicada}
          />
        ))}

        {vagasFiltradas.length === 0 && (
          <p>Nenhuma vaga encontrada com esses filtros.</p>
        )}
      </section>

      <aside className="filtros">
        <div className="filtros__header">
          <h3>Filtros</h3>
          {/* é uma ação, não navegação: por isso <button> e não <a href> */}
          <button type="button" className="filtros__limpar" onClick={limpar}>limpar</button>
        </div>

        <div className="filtros__itens">
          <p>Tipo de vaga</p>
          {TIPOS.map((tipo) => (
            <label key={tipo}>
              <input
                type="checkbox"
                checked={tiposMarcados.includes(tipo)}
                onChange={() => alternar(tiposMarcados, setTiposMarcados, tipo)}
              />{" "}
              {tipo}
            </label>
          ))}
        </div>

        <div className="filtros__itens">
          <p>Área</p>
          {AREAS.map((area) => (
            <label key={area}>
              <input
                type="checkbox"
                checked={areasMarcadas.includes(area)}
                onChange={() => alternar(areasMarcadas, setAreasMarcadas, area)}
              />{" "}
              {area}
            </label>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Vagas

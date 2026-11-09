import VagaCard from "./VagaCard"

function Vagas({ vagas }) {
return (
    <>
      <section className="vagas">
        <div className="vagas__header">
          <h2>Últimas Vagas</h2>
          <span>{vagas.length} vagas - Atualizado agora</span>
        </div>
        {vagas.map((vaga) => (
            <VagaCard
                key={vaga.id}
                empresa={vaga.empresa}
                cargo={vaga.cargo}
                salario={vaga.salario}
                modelo={vaga.modelo}
                publicada={vaga.publicada}
            />
        ))}

        </section>
        <aside className="filtros">
            <div className="filtros__header">
                <h3>Filtros</h3>
                <a href="">limpar</a>
            </div>

            <div className="filtros__itens">
                <p>Tipo de vaga</p>
                <label htmlFor="check_efetivo">
                    <input type="checkbox" name="check_efetivo" id="check_efetivo"/> Efetivo
                </label>
                <label htmlFor="check_estagio">
                    <input type="checkbox" name="check_estagio" id="check_estagio"/> Estágio
                </label>
                <label htmlFor="check_temp">
                    <input type="checkbox" name="check_temp" id="check_temp"/> Temporário
                </label>
            </div>

            <div className="filtros__itens">
                <p>Área</p>
                <label htmlFor="check_eng">
                    <input type="checkbox" name="check_eng" id="check_eng"/> Engenharia
                </label>
                <label htmlFor="check_design">
                    <input type="checkbox" name="check_design" id="check_design"/> Design
                </label>
                <label htmlFor="check_gestao">
                    <input type="checkbox" name="check_gestao" id="check_gestao"/> Gestão
                </label>
            </div>
        </aside>
        </>
    )
}

export default Vagas;
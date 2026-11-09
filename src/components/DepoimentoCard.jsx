// Um depoimento: recebe os dados só por props
function DepoimentoCard({ texto, nome, cargo }) {
  return (
    <div>
      <p>"{texto}"</p>
      <p>{nome}</p>
      <span>{cargo}</span>
    </div>
  )
}

export default DepoimentoCard

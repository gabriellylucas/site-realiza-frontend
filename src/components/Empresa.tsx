function Empresa() {
  return (
    <section className="empresa" id="empresa">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>Sobre a Realiza</h2>
          <p>
            Com anos de experiência no mercado, a <strong>Realiza</strong> nasceu para 
            descomplicar a Segurança do Trabalho. Auxiliamos empresas de todos os 
            portes a estarem em dia com as NRs, protegendo vidas e evitando multas.
          </p>
          <p>
            Nossa equipe técnica é capacitada para oferecer diagnósticos precisos 
            e treinamentos práticos que fazem a diferença no dia a dia.
          </p>
        </div>
        <div className="sobre-stats">
          <div className="stat">
            <strong>100%</strong>
            <span>Conformidade</span>
          </div>
          <div className="stat">
            <strong>+50</strong>
            <span>Empresas Atendidas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Empresa;
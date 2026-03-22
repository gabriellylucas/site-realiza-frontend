import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        
        <div className="banner-text">
          <h1 className="titulo-banner">
  <span className="linha1">A Revolução Nanotecnológica no</span>
  <span className="linha2"> Combate a Incêndios</span>
</h1>

          <p className="subtitle">
            Tecnologia limpa, sustentável e até <br />
            <strong>10x mais eficiente que a água.</strong>
          </p>

          <ul className="solutions-list">
            <li>Soluções inovadoras para proteger vidas, patrimônios e meio ambiente. florestais e florestais.</li>
            <li>Soluções inovadoras para proteger vidas, patrimônios, industriais em industriais e urbanos.</li>
          </ul>

          <div className="buttons">
            <button className="btn-saiba-mais">Saiba mais</button>
            <button className="btn-orcamento">Solicitar orçamento</button>
          </div>

        </div>

        <div className="banner-image">
          <img src={bannerImg} alt="Tecnologia nanotecnológica no combate a incêndios" />
        </div>

      </div>
    </section>
  );
}

export default Banner;
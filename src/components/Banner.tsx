import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <section 
      className="banner" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerImg})` 
      }}
    >
      <div className="banner-content">
        <h1>REALIZA ANTICHAMAS - AGENTE EXTINTOR DE INCÊNDIO</h1>
        <p> Nanotecnologia para salvar vidas e patrimônios</p>
        <button className="btn-orcamento">Solicitar orçamento</button>
      </div>
    </section>
  );
}

export default Banner;
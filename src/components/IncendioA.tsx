import { Link } from "react-router-dom";
import "../Section.css";
import { FaFireExtinguisher, FaShieldAlt, FaLeaf, FaBolt } from "react-icons/fa";

const IncendioA = () => {
  return (
    <section className="incendioa">
      
      <div className="incendioa-container">
        
        <Link to="/" className="btn-voltar">
          ← Voltar para a Página Inicial
        </Link>

        <h1>Incêndios de Classe A</h1>

        <p className="descricao">
          Ambientes florestais apresentam alto risco de incêndio devido à vegetação densa,
          condições climáticas adversas e difícil acesso para combate.
        </p>

        {/* BOX PRINCIPAL */}
        <div className="box">
          <h2>Nanotecnologia de Combate a Incêndios Florestais</h2>
          <p>
            Os incêndios florestais se espalham rapidamente, impulsionados por fatores naturais como vento, 
            vegetação seca e altas temperaturas, causando impactos severos ao meio ambiente e à biodiversidade.
            O controle eficaz dessas ocorrências exige soluções que atuem rapidamente e, ao mesmo tempo, preservem os ecossistemas.
            O Realiza Antichamas utiliza uma formulação biodegradável que combate o fogo de forma eficiente sem agredir o meio ambiente.
            Sua ação promove resfriamento imediato e cria uma barreira que reduz a propagação das chamas, 
            protegendo áreas extensas e evitando novos focos de incêndio.
            
          </p>
        </div>

        {/* BENEFÍCIOS */}
        <h3>Benefícios da Tecnologia</h3>

        <div className="cards">
          <div className="card">
            <div className="card-icon">
              <FaFireExtinguisher />
            </div>
            <h4>10x Mais Eficiente</h4>
            <p>Tecnologia de nanotecnologia superior à água convencional</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaShieldAlt />
            </div>
            <h4>Segurança Máxima</h4>
            <p>Proteção completa para equipes de brigadistas e fauna local</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaLeaf />
            </div>
            <h4>Sustentável</h4>
            <p>Não corrosivo, biodegradável e seguro ao meio ambiente</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaBolt />
            </div>
            <h4>Dupla Ação</h4>
            <p>Remove oxigênio e resfria simultaneamente</p>
          </div>
        </div>

        {/* BOX FINAL */}
        <div className="bottom">
          <div className="info verde">
            <h4>Eficiência Comprovada</h4>
            <p>
              Produto <strong>10x mais eficiente</strong> que a água tradicional, reduzindo tempo de resposta e danos ambientais.
            </p>
          </div>

          <div className="info azul">
            <h4>Responsabilidade Ambiental</h4>
            <p>
              Fórmula <strong>não corrosiva e biodegradável</strong>, totalmente segura para fauna, flora e mananciais.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IncendioA;
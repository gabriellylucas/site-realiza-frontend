import { Link } from "react-router-dom";
import "../Section.css";
import { FaFireExtinguisher, FaShieldAlt, FaLeaf, FaBolt } from "react-icons/fa";

const Industrial = () => {
  return (
    <section className="industrial">
      
      <div className="industrial-container">
        
        <Link to="/" className="btn-voltar">
          ← Voltar para a Página Inicial
        </Link>


        <h1>Incêndios Industriais</h1>

        <p className="descricao">
          Ambientes industriais apresentam alto risco de incêndio devido à presença
          de materiais inflamáveis, processos de alta temperatura e equipamentos
          elétricos complexos.
        </p>

        {/* BOX PRINCIPAL */}
        <div className="box">
          <h2>Nanotecnologia de Combate a Incêndios</h2>
          <p>
            Nossa solução revolucionária utiliza nanotecnologia avançada para
            combater incêndios industriais de forma mais eficiente, segura e
            sustentável. O produto atua através de dupla ação: 
            <strong className="text-laranja"> removendo o oxigênio </strong> e 
            <strong className="text-azul"> resfriando o ambiente</strong>, garantindo proteção máxima para sua operação industrial.
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
            <p>Proteção completa para pessoas e equipamentos industriais</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaLeaf />
            </div>
            <h4>Sustentável</h4>
            <p>Não corrosivo e seguro ao meio ambiente</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaBolt />
            </div>
            <h4>Dupla Ação</h4>
            <p>Remove oxigênio e resfriando simultaneamente</p>
          </div>
        </div>

        {/* BOX FINAL */}
        <div className="bottom">
          <div className="info laranja">
            <h4>Eficiência Comprovada</h4>
            <p>
              Produto <strong>10x mais eficiente</strong> que a água tradicional, reduzindo tempo de resposta e danos materiais.
            </p>
          </div>

          <div className="info verde">
            <h4>Responsabilidade Ambiental</h4>
            <p>
              Fórmula <strong>não corrosiva</strong> e totalmente segura ao meio ambiente, protegendo sua operação e o planeta.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Industrial;
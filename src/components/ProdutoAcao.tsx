import React from 'react';
import '../ProdutoAcao.css';
import { FaTint, FaSyncAlt, FaClock, FaTruck, FaExclamationTriangle, FaFireAlt, FaBuilding, FaSkull } from "react-icons/fa";

const ProdutoAcao: React.FC = () => {
  return (
    <>
      {/* SEÇÃO AÇÃO DO PRODUTO */}
      <section id="secao-acao-produto">
        <div className="container-interno">
          
          <div className="cabecalho">
            <h2>
              <span className="laranja">AÇÃO</span> <span className="azul">DO PRODUTO</span>
            </h2>
            <p>
              Tecnologia com capacidade excepcional de interromper a cadeia de combustão por contato direto
            </p>
          </div>

          <div className="grid-cards">
            <div className="card-item">
              <div className="icone-bg">❄️</div>
              <h3>Resfriamento</h3>
              <p>Ação imediata na redução da temperatura através da absorção da umidade do ar.</p>
            </div>

            <div className="card-item">
              <div className="icone-bg">🔥</div>
              <h3>Ação por Contato</h3>
              <p>Retirada instantânea do oxigênio, interrompendo a cadeia de combustão.</p>
            </div>

            <div className="card-item">
              <div className="icone-bg">🛡️</div>
              <h3>Bloqueio</h3>
              <p>Forma uma barreira fria que impede a propagação e reignição do fogo.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO PREPARAÇÃO SIMPLES E IMEDIATA */}
      <section id="secao-preparacao">
        <div className="conteudo-centralizado">
          
          <div className="cabecalho-preparacao">
            <h2>
              <span className="laranja">PREPARAÇÃO</span> <span className="azul">SIMPLES E IMEDIATA</span>
            </h2>
            <p className="destaque-texto">
              Inclusão baixa <strong>0,30 a 1,30 g/L</strong>
            </p>
          </div>

          <div className="grid-passos">
            
            <div className="passo-item">
              <div className="numero-passo">1</div>

              <div className="icone-passo">
                <FaTint />
              </div>

              <h3>ABASTEÇA</h3>
              <p>Encha o reservatório com água</p>
            </div>

            <div className="passo-item">
              <div className="numero-passo">2</div>

              <div className="icone-passo">
                <FaSyncAlt />
              </div>

              <h3>RECIRCULE</h3>
              <p>Ligue o sistema de retorno</p>
            </div>

            <div className="passo-item">
              <div className="numero-passo">3</div>

              <div className="icone-passo">
                <FaClock />
              </div>

              <h3>MISTURE</h3>
              <p>Adicione o produto (5 min de agitação)</p>
            </div>

            <div className="passo-item">
              <div className="numero-passo">4</div>

              <div className="icone-passo">
                <FaTruck />
              </div>

              <h3>AÇÃO</h3>
              <p>Solução homogênea pronta para uso</p>
            </div>

          </div>

          {/* SEÇÃO RISCOS */}
<section className="riscos">
  <div className="container">

    <h2 className="titulo">
      Riscos Ocultos dos Produtos
    </h2>

    <h3 className="subtitulo">
      Convencionais no Combate a Incêndios
    </h3>

    <div className="grid-riscos">

      <div className="card risco-vermelho">
        <div className="icone"><FaExclamationTriangle /></div>
        <div>
          <span className="tag">LGE</span>
          <h4>Impacto Ambiental e à Saúde</h4>
          <p>Risco químico severo para seres humanos e contaminação de fauna, flora e mananciais.</p>
        </div>
      </div>

      <div className="card risco-vermelho">
        <div className="icone"><FaFireAlt /></div>
        <div>
          <span className="tag">LGE</span>
          <h4>Ineficiência Operacional</h4>
          <p>Não cria barreira durável contra reignição e exige alto consumo de água.</p>
        </div>
      </div>

      <div className="card risco-laranja">
        <div className="icone"><FaBuilding /></div>
        <div>
          <span className="tag laranja">Retardantes LTR</span>
          <h4>Danos Estruturais e Materiais</h4>
          <p>Causa perda de resistência em estruturas tratadas e é altamente corrosivo para equipamentos.</p>
        </div>
      </div>

      <div className="card risco-laranja">
        <div className="icone"><FaSkull /></div>
        <div>
          <span className="tag laranja">Retardantes LTR</span>
          <h4>Toxicidade Humana</h4>
          <p>Produto classificado como tóxico à saúde humana durante o manuseio ou exposição.</p>
        </div>
      </div>

    </div>

    <div className="solucao">
      <h3>Realiza Antichamas: A Solução Segura</h3>
      <p>Não corrosivo, não tóxico, biodegradável e 10x mais eficiente</p>
    </div>

  </div>
</section>

        </div>
      </section>
    </>
  );
};

export default ProdutoAcao;
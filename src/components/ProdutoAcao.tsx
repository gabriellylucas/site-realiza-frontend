import React from 'react';
import '../ProdutoAcao.css';
import { FaTint, FaSyncAlt, FaClock, FaTruck } from "react-icons/fa";

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

        </div>
      </section>
    </>
  );
};

export default ProdutoAcao;
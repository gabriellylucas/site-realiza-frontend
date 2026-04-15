import "../../styles/Contato.css";
import { Send } from "lucide-react";
import Navbar from "../../layouts/Navbar";

export default function Contato() {
  return (
    <>
      <Navbar />

      <div className="contato-page">
        
        <div className="cabecalho-contato">
          <h1>Entre em Contato</h1>
          <p>Nossa equipe está pronta para atendê-lo</p>
          <div className="linha-decorativa-cyan"></div>
        </div>

        <div className="contato-wrapper">
          
          <div className="card-equipe">
            <h2>Nossa Equipe</h2>

            <div className="equipe-membro">
              <p className="equipe-nome">Adriana Rocha</p>
              <p className="equipe-cargo">Gerente Comercial</p>
              <div className="equipe-contato">
                <p>📞 +55 (54) 99328-8036</p>
                <p>✉️ gestordecontas@realizaantichamas.com.br</p>
              </div>
            </div>

            <div className="equipe-membro">
              <p className="equipe-nome">Lorrany Koch</p>
              <p className="equipe-cargo">Diretora Executiva</p>
              <div className="equipe-contato">
                <p>📞 +55 (62) 99395-4869</p>
                <p>✉️ diretoria@realizaantichamas.com.br</p>
              </div>
            </div>

            <div className="equipe-membro">
              <p className="equipe-nome">Junior Lima</p>
              <p className="equipe-cargo">
                Consultor Técnico{" "}
                <span style={{ color: "#E11D48", marginLeft: "5px", fontWeight: "bold" }}>
                  AMAZONAS
                </span>
              </p>
              <div className="equipe-contato">
                <p>📞 +55 (92) 99383-2425</p>
                <p>✉️ consultoram@realizaantichamas.com.br</p>
              </div>
            </div>
          </div>

          <div className="card-form">
            <h2>Envie sua Mensagem</h2>
            <p className="subtitulo">
              Preencha os campos abaixo e entraremos em contato.
            </p>

            <form className="form-contato">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="form-grupo">
                  <label className="label-field">NOME COMPLETO *</label>
                  <input className="input-field" placeholder="Seu nome" required />
                </div>

                <div className="form-grupo">
                  <label className="label-field">E-MAIL *</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-grupo">
                <label className="label-field">SUA MENSAGEM *</label>
                <textarea
                  className="input-field"
                  rows={4}
                  placeholder="Como podemos ajudar sua empresa?"
                  required
                  style={{ resize: "none" }}
                />
              </div>

              <button type="submit" className="btn-enviar-contato">
                <Send size={18} /> ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
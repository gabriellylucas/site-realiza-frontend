import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../styles/MeusOrcamentos.css";

interface Orcamento {
  id: number;
  empresa: string;
  cnpj: string;
  local: string;
  quantidade_total_kg: number;
  investimento_total: number;
  status: string;
  created_at: string;
}

export default function MeusOrcamentos() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    carregarOrcamentos();
  }, []);

  async function carregarOrcamentos() {
    setLoading(true);
    setErro("");

    try {
      const response = await fetch("http://localhost:3000/orcamentos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao carregar orçamentos");
      }

      const data = await response.json();
      setOrcamentos(data.orcamentos);
    } catch (error) {
      setErro("Erro ao carregar seus orçamentos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function excluirOrcamento(id: number) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este orçamento?");

    if (!confirmar) return;

    try {
      const response = await fetch(`http://localhost:3000/orcamentos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Erro ao excluir orçamento");
        return;
      }

      setOrcamentos((prev) => prev.filter((orcamento) => orcamento.id !== id));
    } catch (error) {
      setErro("Erro ao excluir orçamento. Tente novamente.");
    }
  }

  function formatarData(data: string): string {
    return new Date(data).toLocaleDateString("pt-BR");
  }

  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (loading) {
    return (
      <div className="meus-orcamentos-container">
        <div className="loading">Carregando seus orçamentos...</div>
      </div>
    );
  }

  return (
    <div className="meus-orcamentos-container">
      <div className="meus-orcamentos-box">
        <h1>Meus Orçamentos</h1>
        {user && <p className="usuario-logado">Olá, {user.nome}</p>}
        <p className="subtitle">Histórico de orçamentos solicitados</p>

        {erro && <div className="erro">{erro}</div>}

        {orcamentos.length === 0 ? (
          <div className="sem-orcamentos">
            <p>📋 Você ainda não fez nenhum orçamento.</p>
            <button
              onClick={() => navigate("/orcamento")}
              className="btn-novo-orcamento"
            >
              Solicitar Primeiro Orçamento
            </button>
          </div>
        ) : (
          <div className="orcamentos-list">
            {orcamentos.map((orcamento) => (
              <div key={orcamento.id} className="orcamento-card">
                <div className="orcamento-header">
                  <h3>{orcamento.empresa}</h3>
                  <span className={`status ${orcamento.status}`}>
                    {orcamento.status === "EM_ANALISE" && "⏳ Em análise"}
                    {orcamento.status === "APROVADO" && "✅ Aprovado"}
                    {orcamento.status === "RECUSADO" && "❌ Recusado"}
                  </span>
                </div>

                <div className="orcamento-info">
                  <p><strong>CNPJ:</strong> {orcamento.cnpj}</p>
                  <p><strong>Local:</strong> {orcamento.local}</p>
                  <p><strong>Data:</strong> {formatarData(orcamento.created_at)}</p>
                </div>

                <div className="orcamento-valores">
                  <p>
                    <strong>Quantidade:</strong>{" "}
                    {Number(orcamento.quantidade_total_kg).toFixed(2)} kg
                  </p>
                  <p className="valor-total">
                    <strong>Valor:</strong>{" "}
                    {formatarValor(Number(orcamento.investimento_total))}
                  </p>
                </div>

                <div className="orcamento-actions">
                  <button
                    onClick={() => navigate(`/editar-orcamento/${orcamento.id}`)}
                    className="btn-editar"
                  >
                    ✏️ Editar
                  </button>

                  <button
                    onClick={() => excluirOrcamento(orcamento.id)}
                    className="btn-excluir"
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => navigate("/orcamento")}
          className="btn-novo"
        >
          + Novo Orçamento
        </button>
      </div>
    </div>
  );
}
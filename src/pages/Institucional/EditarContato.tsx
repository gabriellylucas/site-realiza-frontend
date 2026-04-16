import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/ListarContatos.css";

export default function EditarContato() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarContato();
  }, []);

  async function carregarContato() {
    try {
      const response = await fetch(`http://localhost:3000/contatos/${id}`);
      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Erro ao buscar contato");
        setLoading(false);
        return;
      }

      setNome(data.nome || "");
      setEmail(data.email || "");
      setMensagem(data.mensagem || "");
    } catch (error) {
      setErro("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  }

  async function salvarEdicao() {
    setErro("");
    setSucesso("");

    if (!nome || !email || !mensagem) {
      setErro("Preencha todos os campos obrigatórios");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/contatos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          mensagem,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Erro ao atualizar mensagem");
        return;
      }

      setSucesso("Mensagem atualizada com sucesso!");

      setTimeout(() => {
        navigate("/contatos");
      }, 1200);
    } catch (error) {
      setErro("Erro ao conectar com o servidor");
    }
  }

  if (loading) {
    return (
      <div className="listar-contatos-page">
        <div className="listar-contatos-container">
          <p>Carregando mensagem...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="listar-contatos-page">
      <div className="listar-contatos-container">
        <h1 className="listar-contatos-titulo">Editar Contato</h1>

        {erro && <p className="erro-contatos">{erro}</p>}
        {sucesso && <p className="sucesso">{sucesso}</p>}

        <div className="box-edicao">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Mensagem"
            rows={4}
          />

          <div className="acoes-edicao">
            <button className="btn-salvar" onClick={salvarEdicao}>
              Salvar
            </button>

            <button
              className="btn-cancelar"
              onClick={() => navigate("/contatos")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
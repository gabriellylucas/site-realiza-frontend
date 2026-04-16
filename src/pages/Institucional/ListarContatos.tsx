import { useEffect, useState } from "react";
import "../../styles/ListarContatos.css";

interface Contato {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  created_at: string;
}

export default function ListarContatos() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [erro, setErro] = useState("");

  const [contatoEditando, setContatoEditando] = useState<Contato | null>(null);
  const [nomeEditado, setNomeEditado] = useState("");
  const [emailEditado, setEmailEditado] = useState("");
  const [mensagemEditada, setMensagemEditada] = useState("");

  useEffect(() => {
    carregarContatos();
  }, []);

  async function carregarContatos() {
    try {
      const response = await fetch("http://localhost:3000/contatos");
      const data = await response.json();

      if (!response.ok) {
        setErro("Erro ao buscar mensagens");
        return;
      }

      setContatos(data);
    } catch (error) {
      setErro("Erro ao conectar com o servidor");
    }
  }

  function editarContato(contato: Contato) {
    setContatoEditando(contato);
    setNomeEditado(contato.nome);
    setEmailEditado(contato.email);
    setMensagemEditada(contato.mensagem);
  }

  async function salvarEdicao() {
    if (!contatoEditando) return;

    try {
      const response = await fetch(
        `http://localhost:3000/contatos/${contatoEditando.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nomeEditado,
            email: emailEditado,
            mensagem: mensagemEditada,
          }),
        }
      );

      if (!response.ok) {
        alert("Erro ao atualizar mensagem");
        return;
      }

      setContatoEditando(null);
      carregarContatos();
    } catch (error) {
      alert("Erro ao conectar com o servidor");
    }
  }

  async function excluirContato(id: number) {
    const confirmar = window.confirm("Deseja excluir essa mensagem?");

    if (!confirmar) return;

    try {
      const response = await fetch(`http://localhost:3000/contatos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("Erro ao excluir mensagem");
        return;
      }

      carregarContatos();
    } catch (error) {
      alert("Erro ao conectar com o servidor");
    }
  }

  return (
    <div className="listar-contatos-page">
      <div className="listar-contatos-container">
        <h1 className="listar-contatos-titulo">Mensagens de Contato</h1>

        {erro && <p className="erro-contatos">{erro}</p>}

        {contatoEditando && (
          <div className="box-edicao">
            <h2>Editando mensagem</h2>

            <input
              value={nomeEditado}
              onChange={(e) => setNomeEditado(e.target.value)}
              placeholder="Nome"
            />

            <input
              value={emailEditado}
              onChange={(e) => setEmailEditado(e.target.value)}
              placeholder="Email"
            />

            <textarea
              value={mensagemEditada}
              onChange={(e) => setMensagemEditada(e.target.value)}
              placeholder="Mensagem"
              rows={4}
            />

            <div className="acoes-edicao">
              <button className="btn-salvar" onClick={salvarEdicao}>
                Salvar
              </button>

              <button
                className="btn-cancelar"
                onClick={() => setContatoEditando(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {contatos.length === 0 ? (
          <p className="lista-vazia">Nenhuma mensagem encontrada.</p>
        ) : (
          contatos.map((contato) => (
            <div key={contato.id} className="card-contato">
              <p><strong>Nome:</strong> {contato.nome}</p>
              <p><strong>Email:</strong> {contato.email}</p>
              <p><strong>Mensagem:</strong> {contato.mensagem}</p>

              <div className="card-acoes">
                <button
                  className="btn-editar"
                  onClick={() => editarContato(contato)}
                >
                  Editar
                </button>

                <button
                  className="btn-excluir"
                  onClick={() => excluirContato(contato.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
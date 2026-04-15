import { useState } from "react";
import "../../styles/Cadastro.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function validarEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validarCPF(cpf: string) {
    return cpf.length === 11 && /^\d+$/.test(cpf);
  }

  const handleCadastro = async () => {
    setErro("");

    if (!nome || !email || !cpf || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Digite um email válido");
      return;
    }

    if (!validarCPF(cpf)) {
      setErro("CPF inválido (apenas números, 11 dígitos)");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          cpf,
          senha,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Erro ao cadastrar");
        return;
      }

      alert("Cadastro realizado com sucesso!");
      window.location.href = "/login";

    } catch (error) {
      setErro("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h1>Cadastro</h1>
        <p className="subtitle">Crie sua conta</p>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="CPF (somente números)"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        {erro && <p className="erro">{erro}</p>}

        <button onClick={handleCadastro}>
          Cadastrar
        </button>

        <p className="link">
          Já tem uma conta? <span onClick={() => window.location.href = "/login"}>Login</span>
        </p>
      </div>
    </div>
  );
}
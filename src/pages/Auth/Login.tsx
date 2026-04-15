import { useState } from "react";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const navigate = useNavigate();

  function validarEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleLogin = async () => {
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Digite um email válido");
      return;
    }

    if (senha.length < 6) {
      setErro("Senha muito curta");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Email ou senha inválidos");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      setErro("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p className="subtitle">Acesse sua conta</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p className="erro">{erro}</p>}

        <button onClick={handleLogin}>Entrar</button>

        <p className="link">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>

      <p className="footer">
        Tecnologia limpa, sustentável e até <span>10x mais eficiente</span>
      </p>
    </div>
  );
}
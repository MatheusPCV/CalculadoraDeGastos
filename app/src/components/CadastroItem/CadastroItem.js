import React, { useState } from "react";
import "./CadastroItem.css";

const CadastroItem = ({ onAdicionar }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [formaPagamento, setFormaPagamento] = useState("PIX");
  const [mensagemErro, setMensagemErro] = useState("");

  const handleAdicionar = () => {
    if (nome && valor && formaPagamento) {
      const valorNumerico = parseFloat(valor);
      const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      const novoItem = {
        nome,
        valor: valorNumerico,
        valorFormatado,
        tipo,
        formaPagamento,
      };
      onAdicionar(novoItem);
      setNome("");
      setValor("");
      setFormaPagamento("PIX");
      setMensagemErro("");
    } else {
      setMensagemErro("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="cadastro-item-container">
      <h2>Cadastrar Item</h2>
      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Valor:
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </label>
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="receita">Receita</option>
          <option value="gasto">Gasto</option>
        </select>
      </label>
      <label>
        Forma de Pagamento:
        <select
          value={formaPagamento}
          onChange={(e) => setFormaPagamento(e.target.value)}
        >
          <option value="PIX">PIX</option>
          <option value="CREDITO">Crédito</option>
          <option value="DEBITO">Débito</option>
          <option value="BOLETO">Boleto</option>
          <option value="DINHEIRO">Dinheiro</option>
        </select>
      </label>
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  );
};

export default CadastroItem;

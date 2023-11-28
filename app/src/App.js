import React, { useState } from "react";
import CadastroItem from "./components/CadastroItem/CadastroItem";
import ListaReceitas from "./components/ListaReceitas/ListaReceitas";
import ListaDespesas from "./components/ListaDespesas/ListaDespesas";
import "./App.css";

const App = () => {
  const [itens, setItens] = useState([]);

  const adicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
  };

  const excluirItem = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    setItens(novosItens);
  };

  const calcularDespesaTotal = () => {
    const despesas = itens.filter((item) => item.tipo === "gasto");
    const totalDespesas = despesas.reduce(
      (total, despesa) => total + parseFloat(despesa.valor),
      0
    );
    return totalDespesas;
  };

  const calcularReceitaTotal = () => {
    const receitas = itens.filter((item) => item.tipo === "receita");
    const totalReceitas = receitas.reduce(
      (total, receita) => total + parseFloat(receita.valor),
      0
    );
    return totalReceitas;
  };

  const calcularSaldo = () => {
    const despesaTotal = calcularDespesaTotal();
    const receitaTotal = calcularReceitaTotal();
    const saldo = receitaTotal - despesaTotal;
    return saldo;
  };

  const formatarValorMonetario = (valor) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="container">
      <h1>Controle de Gastos</h1>
      <CadastroItem onAdicionar={adicionarItem} />
      <div className="listas-container">
        <ListaReceitas
          receitas={itens.filter((item) => item.tipo === "receita")}
          onExcluirReceita={excluirItem}
        />
        <ListaDespesas
          despesas={itens.filter((item) => item.tipo === "gasto")}
          onExcluirDespesa={excluirItem}
        />
      </div>
      <div className="total-container">
        <div className="despesa-receita">
          <h2>
            Total Despesas: {formatarValorMonetario(calcularDespesaTotal())}
          </h2>
          <h2>
            Total Receitas: {formatarValorMonetario(calcularReceitaTotal())}
          </h2>
        </div>
        <div className="saldo">
          <h2>Saldo: {formatarValorMonetario(calcularSaldo())}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;

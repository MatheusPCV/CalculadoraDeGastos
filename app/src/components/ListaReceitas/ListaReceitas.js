// ListaReceitas.js
import React from "react";
import "./ListaReceitas.css";

/**
 * Componente para exibição da lista de receitas.
 * @param {Object} props - Propriedades do componente.
 * @param {Array} props.receitas - Lista de receitas a ser exibida.
 * @param {Function} props.onExcluirReceita - Função a ser chamada ao excluir uma receita.
 */
const ListaReceitas = ({ receitas, onExcluirReceita }) => {
  // Renderiza a lista de receitas
  return (
    <div className="lista">
      <h2>Receitas</h2>
      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>
            <strong>{receita.nome}</strong> - {receita.valor}
            <button
              className="btn-verm"
              onClick={() => onExcluirReceita(index)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaReceitas;

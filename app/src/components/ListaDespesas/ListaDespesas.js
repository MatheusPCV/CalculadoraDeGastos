// ListaDespesas.js
import React from "react";

/**
 * Componente para exibição da lista de despesas.
 * @param {Object} props - Propriedades do componente.
 * @param {Array} props.despesas - Lista de despesas a ser exibida.
 * @param {Function} props.onExcluirDespesa - Função a ser chamada ao excluir uma despesa.
 */
const ListaDespesas = ({ despesas, onExcluirDespesa }) => {
  // Renderiza a lista de despesas
  return (
    <div className="lista">
      <h2>Despesas</h2>
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>
            <strong>{despesa.nome}</strong> - {despesa.valor}
            <button onClick={() => onExcluirDespesa(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDespesas;

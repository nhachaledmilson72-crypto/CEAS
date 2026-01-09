
/**
 * Alterna a visibilidade de um elemento usando classes CSS
 * @param {string} id - O ID do elemento a ser alternado
 */
function toggleElement(id) {
  const element = document.getElementById(id);
  
  if (element) {
    // Alterna entre a classe oculta e a classe de grid
    element.classList.toggle('hidden');
    element.classList.toggle('grid-display');
    
    // Opcional: Adiciona classe 'active' ao botão se desejar
    // Isso requer passar o 'event' como argumento na função
  }
}

// Funções específicas chamando a lógica genérica
function cadeira() {
  toggleElement('cadeiras');
}

function disciplina() {
  toggleElement('disciplinas');
}
function toggleSelection(targetId, btn) {
  const cadeiras = document.getElementById("cadeiras");
  const disciplinas = document.getElementById("disciplinas");
  const botoes = document.querySelectorAll(".button-toggle button");

  // 1. Remove a classe 'active' de todos os botões
  botoes.forEach((b) => b.classList.remove("active"));

  // 2. Lógica de alternância
  if (targetId === "cadeiras") {
    cadeiras.classList.toggle("hidden"); // Mostra/Esconde Cadeiras
    disciplinas.classList.add("hidden"); // Garante que Disciplinas feche
    if (!cadeiras.classList.contains("hidden")) btn.classList.add("active");
  } else if (targetId === "disciplinas") {
    disciplinas.classList.toggle("hidden"); // Mostra/Esconde Disciplinas
    cadeiras.classList.add("hidden"); // Garante que Cadeiras feche
    if (!disciplinas.classList.contains("hidden")) btn.classList.add("active");
  }
}
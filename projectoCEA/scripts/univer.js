function toggleAccordion(element) {
  // Encontra o card pai do botão clicado
  const card = element.parentElement;

  // Verifica se este card já está aberto
  const isActive = card.classList.contains("active");

  // Opcional: Fecha todos os outros antes de abrir o novo (estilo acordeão puro)
  document.querySelectorAll(".uni-card").forEach((c) => {
    c.classList.remove("active");
  });

  // Se não estava ativo, abre. Se estava, o código acima já fechou.
  if (!isActive) {
    card.classList.add("active");
  }
}

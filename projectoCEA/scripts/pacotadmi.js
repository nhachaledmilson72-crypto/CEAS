function toggleAccordion(element) {
  // Alterna a classe ativa para o botão
  element.classList.toggle("active");

  // Seleciona o painel (div logo após o botão)
  var panel = element.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    // Define a altura máxima baseada no conteúdo real
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

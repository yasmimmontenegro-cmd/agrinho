/*
  Projeto: Sistema de Irrigação Inteligente - Agrinho
  Arquivo: script.js
  Descrição: Lógica para atualizar o dashboard com dados do sensor e simular o funcionamento.
// Função para atualizar os elementos da tela com os novos dados
function atualizarDashboard(umidade, bombaAtiva, economia) {
 // Atualiza a Umidade e o Status do Solo
 // const elementoUmidade = document.getElementById('umidade');
 const elementoStatusSolo = document.getElementById('status-solo');
  elementoUmidade.innerText = `${umidade}%`;  
 if (umidade < 40) {
elementoStatusSolo.innerText = "Seco (Necessita Rega)";
elementoStatusSolo.style.color = "#d32f2f"; // Vermelho
// } else if (umidade <= 70) {
elementoStatusSolo.innerText = "Ideal";
elementoStatusSolo.style.color = "#2e7d32"; // Verde
} else {
 elementoStatusSolo.innerText = "Encharcado";
 elementoStatusSolo.style.color = "#1565c0"; // Azul
}
// Atualiza o Status da Válvula/Bomba
const elementoBomba = document.getElementById('bomba');
if (bombaAtiva) {
 elementoBomba.innerText = "LIGADA";
elementoBomba.className = "dado status-on"; // Muda para a cor azul de ativo
} else {
elementoBomba.innerText = "DESLIGADA";
 elementoBomba.className = "dado status-off"; // Muda para cinza
}
 // Atualiza a Economia de Água
 //  const elementoEconomia = document.
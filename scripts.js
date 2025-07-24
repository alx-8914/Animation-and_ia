/* 
VÁRIAVEIS - Um pedacinho de memória do computador
que eu posso guardar o que eu quiser.

FUNCOES
É um pedacinho de código QUE, só executa 
Quando é chamado.

documet = HTML
querySelector = buscar alguém no HTML

fecth = ferramenta que busca algo na internet
JSON = formato de dados que o N8N usa para enviar e receber informações

[x] Descobrir quando o botão foi clicado
[x] Pegar o que foi escrito no Input
[ ] Enviar para o N8N
[ ] Receber o que o N8N Respondeu
[ ] Colocar na Tela o que ele respondeu    

*/
let webhookUrl = "https://animationcreate.netlify.app/";
// Função que é executada quando o botão é clicado
async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");
  // Verifica se o input está vazio
  let botao = document.querySelector(".botao-magica");
  // Verifica se o input está vazio
  botao.disabled = true; // Desabilita o botão enquanto a requisição está sendo processada
  botao.textContent = "Criando..."; // Muda o texto do botão para indicar que está carregando
  botao.style.background = "#888"; // Muda a cor do botão para branco;
  // Verifica se o input está vazio
  let resposta = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });
  // Verifica se a resposta foi bem sucedida
  let resultado = await resposta.json();

  let info = JSON.parse(resultado.resposta);

  codigo.innerHTML = info.code;
  areaResultado.innerHTML = info.preview;

  document.head.insertAdjacentHTML(
    "beforeend",
    "<style>" + info.style + "</style>"
  );
  // Verifica se o input está vazio

  botao.disabled = false; // Habilita o botão novamente;
  botao.textContent = "Criar Mágica ✨"; // Muda o texto do botão para o original
  botao.style.background = "#37E359"; // Muda a cor do botão para verde;
}

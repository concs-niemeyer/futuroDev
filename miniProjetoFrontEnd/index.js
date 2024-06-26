// Função para inicializar a lista de interesses a partir do localStorage
function inicializarLista() {
  // Verifica se há interesses armazenados no localStorage
  if (localStorage.getItem("meus-interesses")) {
    // Recupera os interesses do localStorage e converte de volta para um array
    const interesses = JSON.parse(localStorage.getItem("meus-interesses"));

    // Seleciona o elemento <ul> onde os interesses serão exibidos
    const listaInteresses = document.getElementById("lista-interesses");

    // Limpa qualquer conteúdo pré-existente na lista
    listaInteresses.innerHTML = "";

    // Itera pelos interesses e cria elementos <li> para cada um
    interesses.forEach((interesse) => {
      const li = document.createElement("li");
      li.textContent = interesse;
      listaInteresses.appendChild(li);
    });
  } else {
    console.log("Nenhum interesse encontrado no localStorage.");
  }
}

// Função para adicionar um novo interesse
function adicionarInteresse() {
	// Recupera o valor digitado no input
	const novoInteresse = document.getElementById("novo-interesse").value.trim();

	// Verifica se o campo não está vazio
	if (novoInteresse === "") {
    	alert("Por favor, digite um interesse válido.");
    	return;
	}

	// Recupera os interesses armazenados no localStorage
	let interesses = localStorage.getItem("meus-interesses")
    ? JSON.parse(localStorage.getItem("meus-interesses"))
    : [];

	// Verifica se o interesse já existe na lista
	if (interesses.includes(novoInteresse)) {
    	alert(`O interesse "${novoInteresse}" já está registrado.`);
		// Limpa o campo de input
		document.getElementById("novo-interesse").value = "";
		return;
	}

	// Adiciona o novo interesse ao array de interesses
	interesses.push(novoInteresse);

	// Atualiza o localStorage com o novo array de interesses
	localStorage.setItem("meus-interesses", JSON.stringify(interesses));

	// Atualiza a lista na página
	const listaInteresses = document.getElementById("lista-interesses");
	const novoLi = document.createElement("li");
	novoLi.textContent = novoInteresse;
	listaInteresses.appendChild(novoLi);

	// Limpa o campo de input
	document.getElementById("novo-interesse").value = "";
}

// Função para limpar toda a lista de interesses
function limparLista() {
	// Limpa o localStorage removendo a chave 'meus-interesses'
	localStorage.removeItem("meus-interesses");

	// Limpa a lista no DOM
	const listaInteresses = document.getElementById("lista-interesses");
	listaInteresses.innerHTML = "";
}

// Adiciona um listener de clique ao botão "Adicionar"
document.getElementById("btn-add").addEventListener("click", adicionarInteresse);

// Adiciona um listener de clique ao botão "Limpar Lista"
document.getElementById("btn-clr").addEventListener("click", limparLista);

// Inicializa a lista de interesses ao carregar a página
inicializarLista();

// URL da API do IBGE de notícias
const apiUrl = "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release";

let noticias = []; // Array para armazenar as notícias obtidas da API
let indexNoticiaAtual = 0; // Índice da notícia atual que está sendo exibida

// Função para fazer a requisição e processar os dados
function obterNoticiaDoIBGE() {
    fetch(apiUrl)
        .then((response) => {
            // Verifica se a requisição foi bem sucedida (status 200)
            if (!response.ok) {
                throw new Error("Não foi possível obter os dados das notícias do IBGE.");
            }
            // Converte a resposta para JSON
            return response.json();
        })
        .then((data) => {
            // Verifica se há items na resposta
            if (data.items && data.items.length > 0) {
                // Armazena as notícias obtidas no array 'noticias'
                noticias = data.items.map(noticia => ({
                    titulo: noticia.titulo,
                    link: noticia.link
                }));
                // Inicia a exibição das notícias
                exibirProximaNoticia();
            } else {
                console.log("Nenhuma notícia encontrada.");
            }
        })
        .catch((error) => {
            console.error("Ocorreu um erro ao obter os dados:", error);
        });
}

// Função para exibir a próxima notícia do array 'noticias'
function exibirProximaNoticia() {
    // Verifica se há notícias para exibir
    if (noticias.length > 0) {
        // Obtém o elemento onde a notícia será exibida
        const linkElemento = document.querySelector(".title-news-today");
        // Limpa qualquer conteúdo pré-existente
        linkElemento.innerHTML = "";

        // Obtém a notícia atual com base no índice atual
        const noticiaAtual = noticias[indexNoticiaAtual];
        
        // Cria um elemento de âncora <a> para o link da notícia
        const linkAnchor = document.createElement("a");
        linkAnchor.textContent = noticiaAtual.titulo; // Texto do link visível para o usuário
        linkAnchor.href = noticiaAtual.link; // Define o link de destino do âncora

        // Adiciona o link ao elemento pai
        linkElemento.appendChild(linkAnchor);

        // Incrementa o índice para a próxima notícia
        indexNoticiaAtual = (indexNoticiaAtual + 1) % noticias.length;

        // Agendando a exibição da próxima notícia após 5 segundos
        setTimeout(exibirProximaNoticia, 5000); // 5000 milissegundos = 5 segundos
    }
}

// Chama a função para obter a notícia do IBGE
obterNoticiaDoIBGE();

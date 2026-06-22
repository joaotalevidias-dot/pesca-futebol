// Lista de frases de pescador
const frases = [
    "A paciência é a maior virtude de um bom pescador. 🌊",
    "Um mau dia de pesca é melhor do que um bom dia de trabalho! 🐟",
    "O melhor momento para pescar é quando você pode ir. 🎣",
    "Pescador bom não é o que pega o maior peixe, é o que conta a melhor história!",
    "Linha na água, mente tranquila. 🛶"
];

// Pegando os elementos do HTML
const botao = document.getElementById('btnFrase');
const textoResultado = document.getElementById('fraseResultado');

// Função que roda quando o botão é clicado
botao.addEventListener('click', function() {
    // Escolhe uma frase aleatória da lista
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSelecionada = frases[indiceAleatorio];
    
    // Atualiza o texto na tela
    textoResultado.textContent = fraseSelecionada;
});

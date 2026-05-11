// ===== INTRO ANIMADA =====
document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("inicio");
    const conteudo = document.getElementById("conteudo");

    if (!intro || !conteudo) return;

    setTimeout(() => {
        intro.classList.add("efeito-out");

        setTimeout(() => {
            intro.style.display = "none";
            conteudo.style.display = "block";
        }, 1000);
    }, 3000);
});

// ===== CARDS DE PRODUTOS EM DESTAQUE =====
const produtos = [
    { nome: "Ração Premium",     preco: 89.90,  promocao: true,  icone: "🐾" },
    { nome: "Caminha Confort",   preco: 149.90, promocao: false, icone: "🛏️" },
    { nome: "Brinquedo Mordedor",preco: 34.90,  promocao: true,  icone: "🦴" },
    { nome: "Coleira Ajustável", preco: 49.90,  promocao: false, icone: "📿" },
    { nome: "Shampoo Pet",       preco: 27.90,  promocao: true,  icone: "🧴" },
    { nome: "Arranhador Gato",   preco: 119.90, promocao: false, icone: "🐱" },
];

function gerarCards(lista) {
    const container = document.getElementById("lista-produtos");

    if (!container) return; // evita erro nas outras páginas

    const html = lista.map(item => `
        <div class="card">
            <div class="icone">${item.icone}</div>
            <h3>${item.nome}</h3>
            <p class="preco">R$ ${item.preco.toFixed(2)}</p>
            ${item.promocao ? '<span class="badge">🔥 Promoção</span>' : ''}
        </div>
    `).join("");

    container.innerHTML = html;
}

gerarCards(produtos);

// ===== FORMULÁRIO DE CONTATO =====
function enviarFormulario() {
    const nome  = document.getElementById("nome");
    const email = document.getElementById("email");
    const desc  = document.getElementById("descricao");
    const msg   = document.getElementById("msg-enviado");

    if (!nome || !email || !desc) return; // só roda na página contato

    if (nome.value.trim() === "" || email.value.trim() === "" || desc.value.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Digite um e-mail válido!");
        return;
    }

    msg.style.display = "block";
    nome.value  = "";
    email.value = "";
    desc.value  = "";
}

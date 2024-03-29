/* ========== Gerenciamento do Menu Navbar e Links Ativos durante a Rolagem ========== */

// Seleciona o ícone do menu e a barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Seleciona todas as seções e links de navegação
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Adiciona um ouvinte de evento para o clique no ícone do menu
menuIcon.onclick = () => {
    // Alterna a classe 'bx-x' para exibir o ícone de fechar quando o menu está aberto
    menuIcon.classList.toggle('bx-x');
    // Alterna a classe 'active' para mostrar ou ocultar a barra de navegação
    navbar.classList.toggle('active');
};

// Adiciona um ouvinte de evento para rolagem da janela
window.onscroll = () => {
    // Para cada seção
    sections.forEach(sec => {
        // Obtém a posição atual de rolagem da janela
        let top = window.scrollY;
        // Obtém a posição superior da seção com um deslocamento
        let offset = sec.offsetTop - 150;
        // Obtém a altura da seção
        let height = sec.offsetHeight;
        // Obtém o ID da seção
        let id = sec.getAttribute('id');

        // Verifica se a posição atual de rolagem está dentro da seção atual
        if (top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links de navegação
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Adiciona a classe 'active' ao link de navegação correspondente à seção atual
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Adiciona ou remove a classe 'sticky' do cabeçalho dependendo da posição de rolagem
    header.classList.toggle('sticky', window.scrollY > 100);
    // Fecha o menu ao clicar em um link de navegação durante a rolagem
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ========== SCROLL REVEAL ========== */

// Configuração da animação de revelação
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Aplica a animação de revelação aos elementos específicos
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'right' });

/* ========== Typed JS ANIMAÇÃO NOME HOME ========== */

// Configuração da animação de texto digitado
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/* ========== DOWNLOAD DO CV ========== */

// Adiciona um ouvinte de evento para o clique no botão de download do CV
document.getElementById('downloadButton').addEventListener('click', function() {
    // Cria um elemento de link
    var link = document.createElement('a');
    // Define o URL do arquivo PDF para download
    link.href = './image/cv/Guilherme_oliveira.pdf';
    // Define o nome do arquivo PDF para download
    link.download = 'Guilherme_oliveira.pdf';
    // Abre o link em uma nova aba
    link.target = '_blank';
    // Aciona o clique no link
    link.click();
});

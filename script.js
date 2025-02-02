document.getElementById('cta-button').addEventListener('click', function() {
    alert('Obrigado pelo seu interesse! Em breve entraremos em contato.');
});

// Adiciona efeito de scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adiciona classe ativa ao menu quando scrollar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);
});
// SITE CARREGADO

console.log("Site 20 anos Faculdade R.Sá carregado com sucesso!");


// =========================
// SCROLL SUAVE DO MENU
// =========================

const links = document.querySelectorAll('nav a');

links.forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const id = this.getAttribute('href');

    const section = document.querySelector(id);

    // ALTURA DO HEADER
    const headerHeight = document.querySelector('.header').offsetHeight;

    // POSIÇÃO DA SEÇÃO
    const sectionTop = section.offsetTop - headerHeight - 15;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });

  });

});


// =========================
// SLIDER DA TIMELINE
// =========================

document.querySelectorAll('.timeline-slider').forEach(slider => {

  const track = slider.querySelector('.timeline-track');

  const next = slider.querySelector('.next');

  const prev = slider.querySelector('.prev');

  next.addEventListener('click', () => {

    track.scrollBy({
      left: 500,
      behavior: 'smooth'
    });

  });

  prev.addEventListener('click', () => {

    track.scrollBy({
      left: -500,
      behavior: 'smooth'
    });

  });

});


// =========================
// ANIMAÇÃO AO APARECER
// =========================

const cards = document.querySelectorAll(
  '.timeline-card, .impact-card, .dev-card, .card'
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

cards.forEach(card => {

  card.classList.add('hidden');

  observer.observe(card);

});

function abrirModal(imagem, titulo, descricao){

  document.getElementById("modalMemoria").style.display = "block";

  document.getElementById("modalImagem").src = imagem;

  document.getElementById("modalTitulo").innerText = titulo;

  document.getElementById("modalDescricao").innerText = descricao;

}

function fecharModal(){

  document.getElementById("modalMemoria").style.display = "none";

}

window.onclick = function(event){

  const modal = document.getElementById("modalMemoria");

  if(event.target === modal){

    modal.style.display = "none";

  }

}

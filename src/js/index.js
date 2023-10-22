const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoPersonagem();

        personagem.classList.add('selecionado');

        mudaImagemSelecionado(personagem);

        mudaNomePersonagemSelecionado(personagem);

        mudaDescricaoPersonagemSelecionado(personagem);
    })
})

function mudaDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao__personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function mudaNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome__personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function mudaImagemSelecionado(personagem) {
    const personagemGrande = document.querySelector('.personagem__grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
let musica

function preload() {
  musica = loadSound("trilha.mp3")
}

function setup() {
  musica.play()
  musica.loop()
}

const avanca = document.querySelectorAll(".proximo")
avanca.forEach(button => {
  button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo')
    const proximoPasso = 'Passo-' +     this.getAttribute('data-proximo')
    atual.classList.remove('ativo')
      document.getElementById(proximoPasso).classList.add('ativo')
  })
})
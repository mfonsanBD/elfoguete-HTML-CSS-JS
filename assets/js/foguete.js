document.addEventListener("mousemove", function(e){
    var foguete = document.querySelector('.foguete');
    foguete.style.left = e.offsetX+'px';
    foguete.style.top = e.offsetY+'px';
});
function estrelas(){
    let count = 20;
    let cena = document.querySelector('.cena');
    let i = 0;

    while(i < count){
        let estrela = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);

        let duracao = Math.random()*1;
        let h = Math.random()*100;

        estrela.style.left = x+'px';
        estrela.style.width = 1+'px';
        estrela.style.height = 50+h+'px';
        estrela.style.animationDuration = duracao+'s';

        cena.appendChild(estrela);
        i++;
    }
}
estrelas();
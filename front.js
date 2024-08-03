document.getElementById('btn1').addEventListener('click', function(){
    nuevoTitulo = prompt('Escribe un nuevo titulo');
    document.getElementById('t2').innerHTML = nuevoTitulo;
    document.getElementById('t2').style.color = 'blue';
});

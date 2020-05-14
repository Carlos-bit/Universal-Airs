function explorar(numero){
    if(numero == 1){                
        document.getElementById('infoVoo').style.display = 'block'
        document.getElementById('infoVooConteudo').style.display = 'flex'
        document.getElementById('infoVooConteudo').style.background = 'url(img/views-of-the-sugar-loaf-1141047_1920.jpg)'
        document.getElementById('infoVooConteudo').style.backgroundSize = 'cover'
        document.getElementById('conteudo').style.display = 'none'
        document.getElementById('btnEnviarFotter').style.display = 'none'
        document.getElementById('optionDestinoVoo').innerText = 'Nova York'
    }
    if(numero == 2){
        document.getElementById('infoVoo').style.display = 'block'
        document.getElementById('infoVooConteudo').style.display = 'flex'
        document.getElementById('infoVooConteudo').style.background = 'url(img/greece-2707528_640.jpg)'
        document.getElementById('infoVooConteudo').style.backgroundSize = 'cover'
        document.getElementById('conteudo').style.display = 'none'
        document.getElementById('btnEnviarFotter').style.display = 'none'
        document.getElementById('optionDestinoVoo').innerText = 'Grecia'
    }
    if(numero == 3){
        document.getElementById('infoVoo').style.display = 'block'
        document.getElementById('infoVooConteudo').style.display = 'flex'
        document.getElementById('infoVooConteudo').style.background = 'url(img/paris-1836415_640.jpg)'
        document.getElementById('infoVooConteudo').style.backgroundSize = 'cover'
        document.getElementById('conteudo').style.display = 'none'
        document.getElementById('btnEnviarFotter').style.display = 'none'
        document.getElementById('optionDestinoVoo').innerText = 'Paris'
    }
    if(numero == 4){
        document.getElementById('infoVoo').style.display = 'block'
        document.getElementById('infoVooConteudo').style.display = 'flex'
        document.getElementById('infoVooConteudo').style.background = 'url(img/Amsterdam.jpg)'
        document.getElementById('infoVooConteudo').style.backgroundSize = 'cover'
        document.getElementById('conteudo').style.display = 'none'
        document.getElementById('btnEnviarFotter').style.display = 'none'
        document.getElementById('optionDestinoVoo').innerText = 'Amsterdã'
    }
    if(numero == 5){
        document.getElementById('infoVoo').style.display = 'block'
        document.getElementById('infoVooConteudo').style.display = 'flex'
        document.getElementById('infoVooConteudo').style.background = 'url(img/views-of-the-sugar-loaf-1141047_1920.jpg)'
        document.getElementById('infoVooConteudo').style.backgroundSize = 'cover'
        document.getElementById('conteudo').style.display = 'none'
        document.getElementById('btnEnviarFotter').style.display = 'none'
        document.getElementById('optionDestinoVoo').innerText = 'Londres'
    }
    if(numero == 6){
        document.getElementById('infoVoo').style.display = 'block'
        document.getElementById('infoVooConteudo').style.display = 'flex'
        document.getElementById('infoVooConteudo').style.background = 'url(img/views-of-the-sugar-loaf-1141047_1920.jpg)'
        document.getElementById('infoVooConteudo').style.backgroundSize = 'cover'
        document.getElementById('conteudo').style.display = 'none'
        document.getElementById('btnEnviarFotter').style.display = 'none'
        document.getElementById('optionDestinoVoo').innerText = 'Noruega'
    }            
}
function sairVoo(){
    document.getElementById('infoVoo').style.display = 'none'
    document.getElementById('infoVooConteudo').style.display = 'none'
    document.getElementById('btnEnviarFotter').style.display = 'block'
    document.getElementById('conteudo').style.display = 'flex'
}

const body = document.getElementsByTagName('body')[0];
const botao = document.getElementById('botao');
const mode = document.getElementById('page-title');
const txtbtn = document.getElementById('btn-title');



function darkMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle('dark-mode')
    mode.classList.toggle('dark-mode')
    txtbtn.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
}


function changeText(){
    if(botao.classList.contains('dark-mode')){
        mode.innerText = 'Dark Mode ON';
        txtbtn.innerText ='Light Mode'
    }else{
        mode.innerText = 'Light Mode ON';
        txtbtn.innerText ='Dark Mode'
    }
}
botao.addEventListener("click", darkMode);





    //txtbtn.style.color = 'black';
    // botao.innerText = 'Light Mode'
    // botao.style.fontFamily = "Courier New, Courier, monospace;"
    //document.body.style.backgroundColor = "black";
function enableEn(){
    let bd = document.body
    bd.style.setProperty("--lang-en-display","static")
    bd.style.setProperty("--lang-fa-display","none")
    bd.style.setProperty("--fa-bg-color","transparent")
    bd.style.setProperty("--fa-color","cyan")
    bd.style.setProperty("--en-bg-color","cyan")
    bd.style.setProperty("--en-color","#151515")
    
}
function enableFa(){
    let bd = document.body
    bd.style.setProperty("--lang-en-display","none")
    bd.style.setProperty("--lang-fa-display","static")
    bd.style.setProperty("--en-bg-color","transparent")
    bd.style.setProperty("--en-color","cyan")
    bd.style.setProperty("--fa-bg-color","cyan")
    bd.style.setProperty("--fa-color","#151515")
}
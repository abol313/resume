function enableEn(){
    let bd = document.body
    bd.style.setProperty("--lang-en-display","static")
    bd.style.setProperty("--lang-fa-display","none")
    bd.style.setProperty("--fa-bg-color","transparent")
    bd.style.setProperty("--fa-color","cyan")
    bd.style.setProperty("--en-bg-color","cyan")
    bd.style.setProperty("--en-color","#151515")
    en_spans = document.querySelectorAll('span[lang="en"]');
    for(let en_span of en_spans)
        en_span.parentElement.style.direction="ltr";

}
function enableFa(){
    let bd = document.body
    bd.style.setProperty("--lang-en-display","none")
    bd.style.setProperty("--lang-fa-display","static")
    bd.style.setProperty("--en-bg-color","transparent")
    bd.style.setProperty("--en-color","cyan")
    bd.style.setProperty("--fa-bg-color","cyan")
    bd.style.setProperty("--fa-color","#151515")
    fa_spans = document.querySelectorAll('span[lang="fa"]');
    for(let fa_span of fa_spans)
        fa_span.parentElement.style.direction="rtl";

}
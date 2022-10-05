'use strict'

ol.innerHTML = localStorage.getItem("list");

const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) {
    span.onclick = () => del(span.parentElement.parentElement);
}

const spanUrgs = document.querySelectorAll(".urgent");
for (let span of spanUrgs) {
    span.onclick = () => urgent(span);
}

noTache.style.display = (ol.innerHTML == "") ? "block" : "none";

form.onsubmit = function add() {
    const li = document.createElement("li");

    const texte = document.createElement("span");
    texte.classList.add("texte");
    texte.textContent = champ.value;

    const spanDel = document.createElement("span");
    spanDel.classList.add("delete", "material-icons", "md-24");
    spanDel.textContent = "delete_forever";

    const spanUrg = document.createElement("span");
    spanUrg.classList.add("urgent", "material-icons", "md-24");
    spanUrg.textContent = "stars";

    spanDel.onclick = () => del(li);
    spanUrg.onclick = () => urgent(spanUrg);

    const spanOpt = document.createElement("span");
    spanOpt.classList.add("spanOpt");

    spanOpt.appendChild(spanUrg);
    spanOpt.appendChild(spanDel);



    li.appendChild(texte);
    li.appendChild(spanOpt);
    ol.appendChild(li);

    champ.value = "";
    noTache.style.display = "none";

    localStorage.setItem("list", ol.innerHTML);
    return false;
    // e.preventDefault();

}
function del(element) {
    element.remove();
    noTache.style.display = (ol.innerHTML == "") ? "block" : "none";
    localStorage.setItem("list", ol.innerHTML);
}
function urgent(element) {
    element.classList.toggle("gold");
    localStorage.setItem("list", ol.innerHTML);
}

/** empecher le resising */
const metas = document.getElementsByTagName('meta');
metas[2].content = `width=device-width, height= ${window.innerHeight} initial-scale=1.0, maximum-scale=5.0,user-scalable=0`;

// PWA

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
    })
}

/**Bouton Installation Application*/
window.onbeforeinstallprompt = (event) => 
{
    event.preventDefault(); // annuler la banniere par defaut
    installBtn.classList.add("silde"); //affiche la banniere perso

    installBtn.onclick = () => 
    {
        installBtn.classList.remove("silde"); //faire disparaitre le bouton
        setTimeout(()=>installBtn.style.display = "none",500);
        event.prompt(); //permettre l'installation
    };
};
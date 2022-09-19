'use strict'

btn.onclick = function add(){
    const li = document.createElement("li");
    li.textContent = champ.value;

    ol.appendChild(li);
    champ.value = "";
}


div1.textContent = "mady.camara";
div2.innerHTML = "<i>camara.mady</i>";
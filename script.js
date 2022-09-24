'use strict'

form.onsubmit = function add(){
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.innerHTML = champ.value;
    span.textContent = " X ";
    span.onclick = () => del(li);

    li.appendChild(span)
    ol.appendChild(li);
    
    champ.value = "";

    return false;
    // e.preventDefault();

}
function del(element){
    element.remove();
}


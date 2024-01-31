// ADD
function newToDo() {
    // creo un elemento li
  const li = document.createElement("li");
    // prendo il valore dell'input tramite l'id
  const contentValue = document.getElementById("content").value;
    // memorizzo in una variabile note il testo immesso
  const note = document.createTextNode(contentValue);
    // metto il testo dentro al li
  li.appendChild(note);
  if (contentValue === '') {
    alert("You must write something!");
  } else {
    // prendo il li e lo inserisco nell'ul
    document.getElementById("ul").appendChild(li);
  }
  // RIASSEGNO IL VALORE VUOTO AL CAMPO INPUT
  document.getElementById("content").value = "";
// CLOSE BTN
  // metto la x dentro uno span e lo posizione nel li
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
 
  // lo creo dentro ogni elemento della lista
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// CHECK THE ELEMENTS
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// delete
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

(()=>{function e(e){!function(e){const t=`https://openlibrary.org${e}.json`,n=document.getElementsByClassName("book-description")[0];n.innerHTML='<h2 class="text-center py-4">Book description</h2>\n  <div id="book-desc"></div>',loadingDiv=document.getElementById("loading"),loadingDiv.style.display="block",fetch(t).then((e=>e.json())).then((e=>{document.getElementById("book-desc").innerHTML=e.description,loadingDiv.style.display="none",n.scrollIntoView({behavior:"smooth"})})).catch((e=>console.error(e)))}(e.target.getAttribute("data-key"))}document.getElementById("search-btn").addEventListener("click",(function(){const t=document.getElementsByClassName("bg-image")[0],n=document.getElementsByClassName("bg-text")[0];document.getElementById("search-result").innerHTML='<div class="book-list my-3">\n    <h2 class="text-center ps-4 py-5">Search result</h2>\n    <ul id="books"></ul>\n    </div>',t.style.height="50vh",n.style.top="24%";const o=document.getElementById("search-input").value.trim().toLowerCase();""!==o?function(t){const n=`https://openlibrary.org/subjects/${t}.json`;document.getElementById("books").innerHTML="";const o=document.createElement("div");o.id="loading",o.innerHTML="Loading...",o.style.display="block",document.body.appendChild(o),fetch(n).then((e=>e.json())).then((t=>{const n=t.works,o=document.getElementById("books");o.innerHTML="";const s=document.getElementById("loading");if(s.style.display="none",!n||0===n.length)return o.innerHTML='<div class="text-center">Nessun libro trovato.</div>',void(s.style.display="none");n.forEach((t=>{const n=document.createElement("li");n.innerHTML=`<strong>TITLE:</strong> ${t.title} <br> <strong>AUTHOR:</strong> ${t.authors.map((e=>e.name)).join(", ")}`,n.setAttribute("data-key",t.key),n.addEventListener("click",e),o.appendChild(n)}))})).catch((e=>{console.error(e),document.getElementById("loading").style.display="none",alert("Errore durante la ricerca dei libri. Riprova più tardi!")}))}(o):alert("Inserisci una categoria valida!")}))})();
// Funzione per contattare l'API Open Library e recuperare la lista dei libri
function searchBooks(category) {
  const url = `https://openlibrary.org/subjects/${category}.json`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const books = data.works;
      const bookList = document.getElementById("books");
      bookList.innerHTML = "";

      books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>TITLE:</strong> ${book.title} <br> <strong>AUTHOR:</strong> ${book.authors.map(author => author.name).join(", ")}`;
        li.setAttribute("data-key", book.key);
        li.addEventListener("click", showBookDescription);
        bookList.appendChild(li);
      });
    })
    .catch(error => console.error(error));
}

// Funzione per contattare l'API Open Library e recuperare la descrizione di un libro
function getBookDescription(key) {
  const url = `https://openlibrary.org${key}.json`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
  const bookDesc = document.getElementById("book-desc");
  bookDesc.innerHTML = data.description;
  })
  .catch(error => console.error(error));
  }
  
  // Funzione per gestire il click su un libro e visualizzarne la descrizione
  function showBookDescription(event) {
  const key = event.target.getAttribute("data-key");
  getBookDescription(key);
  }
  
  // Funzione per gestire il click sul pulsante di ricerca e visualizzare il div 'Risultati della ricerca'
  function handleSearch() {
  const searchDiv = document.getElementById("search-result");
  const bgImage = document.getElementsByClassName("bg-image")[0];
  const bgText = document.getElementsByClassName("bg-text")[0];

  bgImage.style.height = "50vh";
  bgText.style.top="24%";
  searchDiv.innerHTML=`<div class="book-list my-3">
  <h2 class="text-center py-5">Risultati della ricerca</h2>
  <ul id="books"></ul>
</div>

<div class="book-description">
  <h2>Descrizione del libro</h2>
  <div id="book-desc"></div>
</div>`;



  const searchInput = document.getElementById("search-input");
  const category = searchInput.value.trim().toLowerCase();
  
  if (category === "") {
  alert("Inserisci una categoria valida!");
  return;
  }
  
  searchBooks(category);
  }
  
  // Aggiungiamo un listener al pulsante di ricerca
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", handleSearch);
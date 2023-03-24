

// Funzione per contattare l'API Open Library e recuperare la descrizione di un libro
async function getBookDescription(key) {
    const url = `https://openlibrary.org${key}.json`;
  
    try {
      const response = await axios.get(url);
      const bookDesc = document.getElementById("book-desc");
      bookDesc.innerHTML = response.data.description;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Funzione per gestire il click su un libro e visualizzarne la descrizione
  function showBookDescription(event) {
    const key = event.target.getAttribute("data-key");
    getBookDescription(key);
  }
  
  // Funzione per contattare l'API Open Library e recuperare la lista di libri di una determinata categoria
  async function searchBooks(category) {
    const url = `https://openlibrary.org/subjects/${category}`;
  
    try {
      const response = await axios.get(url);
      const books = response.data.works;
  
      const bookList = document.getElementById("book-list");
      bookList.innerHTML = "";
  
      books.forEach(book => {
        const bookItem = document.createElement("li");
        bookItem.innerHTML = `<a href="#" data-key="${book.key}">${book.title}</a> - ${book.authors.map(author => author.name).join(", ")}`;
        bookList.appendChild(bookItem);
      });
  
      // Aggiungiamo un listener al click su ciascun titolo di libro
      const bookLinks = bookList.getElementsByTagName("a");
      for (let i = 0; i < bookLinks.length; i++) {
        bookLinks[i].addEventListener("click", showBookDescription);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  // Funzione per gestire il click sul pulsante di ricerca
  function handleSearch() {
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
  
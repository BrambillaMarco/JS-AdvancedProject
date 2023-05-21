// Funzione per contattare l'API Open Library e recuperare la lista dei libri
function searchBooks(category) {
	const url = `https://openlibrary.org/subjects/${category}.json`;
	const bookList = document.getElementById("books");
	bookList.innerHTML = "";
	
	
	fetch(url)
		.then(response => response.json())
		.then(data => {

			
			const books = data.works;

			const bookList = document.getElementById("books");
			bookList.innerHTML = "";

			//tolgo la descrizione del libro precedente
			const descriptionDiv = document.getElementsByClassName("book-description")[0];
			descriptionDiv.innerHTML = "";

			// controlla se ci sono libri nella categoria
			if (!books || books.length === 0) {
				bookList.innerHTML = `<div class="text-center">Nessun libro trovato.</div>`;
				

				//resetto il descriptionDiv se c'era gia del testo, altrimenti non cambia nulla
				const descriptionDiv = document.getElementsByClassName("book-description")[0];
				descriptionDiv.innerHTML = "";
				return;
			}

			const li = document.createElement("li");
			li.innerHTML = `<strong>TITLE:</strong> ${book.title} <br> <strong>AUTHOR:</strong> ${book.authors.map(author => author.name).join(", ")}`;
			li.setAttribute("data-key", book.key);
			li.addEventListener("click", showBookDescription);
			bookList.appendChild(li);

			searchBtn.addEventListener("click", handleSearch);
			searchInput.value = "";

		}).catch(error => {
			console.error(error);
			alert("Errore durante la ricerca dei libri. Riprova più tardi!");
		}).finally(() => {
			const loading = getElementById("loading");
			loading.style.display = none;
		});
}

// Funzione per contattare l'API Open Library e recuperare la descrizione di un libro, viene aggiunto anche il div description in html
function getBookDescription(key) {
	const url = `https://openlibrary.org${key}.json`;
	const descriptionDiv = document.getElementsByClassName("book-description")[0];
	descriptionDiv.innerHTML = `<h2 class="text-center py-4">Book description</h2>
  <div id="book-desc"></div>`;


	fetch(url)
		.then(response => response.json())
		.then(data => {

			const bookDesc = document.getElementById("book-desc");
			bookDesc.innerHTML = data.description;
			descriptionDiv.scrollIntoView({
				behavior: "smooth"
			}); //scrolla fino alla descrizione
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
	const bgImage = document.getElementsByClassName("bg-image")[0];
	const bgText = document.getElementsByClassName("bg-text")[0];
	const searchDiv = document.getElementById("search-result");

	//diminuisco la grandezza dell'immagine di sfondo per avere una maggiore chiarezza complessiva
	bgImage.style.height = "50vh";
	bgText.style.top = "24%";

	//ottengo il valore che l'utente ha scritto nel form
	const searchInput = document.getElementById("search-input");
	const category = searchInput.value.trim().toLowerCase();

	//primo controllo sulla categoria immessa dall'utente
	if (category === "") {
		alert("Inserisci una categoria valida!");
		return;
	}

	// rimuovo il listener dal pulsante di ricerca per evitare che venga premuto nuovamente
	searchBtn.removeEventListener("click", handleSearch);

	//chiamata alla funzione searchBooks
	searchBooks(category);
}


// Aggiungiamo un listener al pulsante di ricerca
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleSearch);
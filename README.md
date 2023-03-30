# JS-AdvancedProject
Questa repo contiene il progetto per start2impact su javascript per la lettura e scoperta di nuovi libri utilizzando diverse API gratuite

ONLINE WEBSITE:
https://openlibrary-booksearch.netlify.app/


-PROJECT DESCRIPTION:
1:HTML
-This is a basic HTML file with a linked CSS file and a linked JavaScript file. 
-The HTML file contains a search bar with an input field and a search button. 
-The search bar is placed on top of a background image with a black transparent overlay, which provides a nice visual effect. 
-The input field has a placeholder text that instructs the user to search for books by category. 
-There is also an empty div element with the ID "search-result" that will display the results of the search once the user clicks the search button.

2:CSS 
-css file defines the styles for the various HTML elements used in the page. 
-It sets the font family and background color for the body element, and applies styles to the background image and text overlay. 
-It also sets the styles for the search bar and search button, including their appearance, layout, and behavior. Additionally, it defines styles for a book list that will be displayed once the search results are loaded.

3:JavaScript 
-javascript file defines an event listener for the search button that sends a GET request to the Open Library API to retrieve book data based on the user's search query. 
-The results are then displayed in the empty div element with the ID "search-result". 
-The JavaScript file also defines an event listener for the book list items, which will display a modal with more detailed information about the selected book when clicked.



-KNOWN BUGS

1:The known bug is that if an incorrect category is entered immediately after a correct category, the loading message and the description div do not disappear even though they should.

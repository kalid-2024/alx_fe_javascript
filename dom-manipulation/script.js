document.addEventListener('DOMContentLoaded', () => {

    // Array to hold quotes with text and category properties
const quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Optimism" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Action" },
    { text: "The purpose of our lives is to be happy.", category: "Philosophy" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" }
];


// Save quotes array to local storage
function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}


// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `"${randomQuote.text}" - Category: ${randomQuote.category}`;

    // Save the last viewed quote in session storage
    sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
}

// Function to add a new quote from user input
function createAddQuoteForm() {

    // Create a container div for the form inputs and button
    const formContainer = document.createElement("div");

    // Create the input field for the quote text
    const quoteInput = document.createElement("input");
    quoteInput.setAttribute("id", "newQuoteText");
    quoteInput.setAttribute("type", "text");
    quoteInput.setAttribute("placeholder", "Enter a new quote");

    // Create the input field for the quote category
    const categoryInput = document.createElement("input");
    categoryInput.setAttribute("id", "newQuoteCategory");
    categoryInput.setAttribute("type", "text");
    categoryInput.setAttribute("placeholder", "Enter quote category");

    // Create the "Add Quote" button
    const addButton = document.createElement("button");
    addButton.textContent = "Add Quote";

    // Set up the button's click event to call the addQuote function
    addButton.addEventListener("click", addQuote);

    // Append the input fields and button to the form container
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);

    // Append the form container to the body or a specific section in the DOM
    document.body.appendChild(formContainer); // Or use document.getElementById("container").appendChild(formContainer);


}


function addQuote() {
    
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    // Validate input
    if (newQuoteText === "" || newQuoteCategory === "") {
        alert("Please enter both a quote and a category.");
        return;
    }

    // Add the new quote to the quotes array
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);

    saveQuotes(); // Save updated quotes array to local storage

    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Optionally, display the new quote
    showRandomQuote();
}


// JSON export functionality
function exportToJson() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "quotes.json";
    downloadLink.click();

    URL.revokeObjectURL(url); // Clean up URL after download
}



 // JSON import functionality
 function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(e) {
        try {
            const importedQuotes = JSON.parse(e.target.result);
            quotes.push(...importedQuotes); // Merge imported quotes with existing
            saveQuotes();
            alert('Quotes imported successfully!');
        } catch (error) {
            alert('Invalid JSON file format.');
        }
    };
    fileReader.readAsText(event.target.files[0]);
}



// Load a random quote when the page first loads
createAddQuoteForm();
showRandomQuote ();

// Add event listener to the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);


// Create export and import elements
const exportButton = document.createElement("button");
exportButton.textContent = "Export Quotes to JSON";
exportButton.addEventListener("click", exportToJson);
document.body.appendChild(exportButton);

const importInput = document.createElement("input");
importInput.setAttribute("type", "file");
importInput.setAttribute("id", "importFile");
importInput.setAttribute("accept", ".json");
importInput.addEventListener("change", importFromJsonFile);
document.body.appendChild(importInput);


});
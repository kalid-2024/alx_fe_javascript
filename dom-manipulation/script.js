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

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `"${randomQuote.text}" - Category: ${randomQuote.category}`;
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

    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Optionally, display the new quote
    showRandomQuote();
}


// Load a random quote when the page first loads
document.addEventListener("DOMContentLoaded", showRandomQuote);

// Add event listener to the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);






});
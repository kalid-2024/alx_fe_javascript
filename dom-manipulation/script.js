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
    quoteDisplay.textContent = `"${randomQuote.text}" - Category: ${randomQuote.category}`;
}

// Function to add a new quote from user input
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
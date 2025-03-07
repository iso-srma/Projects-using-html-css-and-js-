const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
];

// Function to display a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
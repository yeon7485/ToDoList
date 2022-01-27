const quotes = [
    {
        quote: "Life is what happens when you\'re busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Love does not consist in gazing at each other, but in looking together in the same direction.",
        author: "Antoine de Saint-Exupery"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D. Rockefeller"
    },
    {
        quote: "One man with courage makes a majority.",
        author: "Andrew Jackson"
    },
    {
        quote: "Only the person who has faith in himself is able to be faithful to others.",
        author: "Erich Fromm"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen of even touched. They must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "Happiness is a warm puppy.",
        author: "Charles M. Schulz"
    },
    {
        quote: "To fall in love with yourself is the first secret to happiness.",
        author: "Robert Morley"
    },
    {
        quote: "Victory is sweetest when you\'ve known defeat.",
        author: "Malcolm S. Forbes"
    },
    {
        quote: "Loving yourself isn’t vanity. It’s sanity.",
        author: "Katrina Mayer"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
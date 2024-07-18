const data = [
  "Living in that house and using the pool would be like a summer vacation, not a job",
  "It was warm and sweet like a summer rain.",
  "I am a summer person and I love the beach.",
  " I love the summerand I love the warmth.",
  "I love the summer and I love the heat.",
  "I love the summer and I love the sun.",
  "I love the summer and I love the beach.",
  "I love the summer and I love the pool.",
  "I love the summer and I love the ocean.",
  "I love the summer and I love the sand.",
  "I love the summer and I love the water.",
  "I love the summer and I love the waves.",
  "I love the summer and I love the sunsets.",
  "I love the summer and I love the sunrises.",
  "I love the summer and I love the sun.",
  "I love the summer and I love the heat.",
  "I love the summer and I love the warmth.",
  "I love the summer and I love the sun.",
  "I love the summer and I love the beach.",
  "I love the summer and I love the pool.",
  "I love the summer and I love the ocean.",
  "I love the summer and I love the sand.",
  "I love the summer and I love the water.",
  "I love the summer and I love the waves.",
  "I love the summer and I love the sunsets.",
  "I love the summer and I love the sunrises.",
  "I love the summer and I love the sun.",
];

// data.forEach((sentence) => {
//   const randomQuote =
//     quotesToUse[Math.floor(Math.random() * quotesToUse.length)];
//   console.log(randomQuote);
// });
const btn = document.querySelector("#btn");
const quote = document.querySelector("#quote");
console.log(quote);
console.log(btn);
function getRandomQuote() {
  const test = data[Math.floor(Math.random() * data.length)];
  console.log(test);
  return test;
}
getRandomQuote();

btn.addEventListener("click", () => {
  const quoteData = (quote.textContent = getRandomQuote().split());
  console.log(quoteData);
});

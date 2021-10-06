const express = require("express");

const app = express();

// Routes
app.get("/", (_req, res) => {
  res.send("IT'S ALIVE!! (Evil laugh)");
});

/**
 * Reference:
 * "Sloths". Wikipedia. https://en.wikipedia.org/wiki/Sloth (accessed Oct. 5, 2021).
 */
const SLOTH_FACTS = [
  "Sloths are most closely related to anteaters. YUM!",
  "There are generally two types of sloths: those with 3 toes on each foot and those with 2.",
  "During the Ice Age, species of ground sloths could be as big as an elephants!",
  "'Sloth' literally means 'laziness'.",
  "Sloths can swim as fast as 13.5 metres per minute!",
  "Although sloths have colour vision, they can't see very well.",
  "A sloth's muscles only make up 25 to 30 percent of their body weight.",
  "Sloths can't walk. When on the ground, they drag themselves around with their claws.",
  "Sloths can slow their metabolism to hold their breath longer under water (up to 40 minutes!).",
  "It can take roughly a month or more for a sloth to digest its food.",
];
app.get("/api/sloths", (_req, res) => {
  res.json(SLOTH_FACTS);
});

// Starting server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
});

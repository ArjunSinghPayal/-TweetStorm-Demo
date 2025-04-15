const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");
const { randomBytes } = require("crypto");
const port = 8080;

app.use(express.urlencoded({ extended: true })); //allows url formatting for all urls
app.use(express.json()); //method of formatting request to json format.
app.use(methodOverride("_method")); //method-override to use a POST request as PATCH or DELETE request.
app.set("views", path.join(__dirname, "views")); //setting deafult path for view to the current directory name on which the index.js file is /views.
//it is used so the we can access views folder when we run the server from outside the directory from some other folder.
app.set("view engine", "ejs"); // setting views engine to ejs.

// Utility to generate a random date within the last hour
function getRandomDateWithinLastHour() {
  const now = new Date();
  const offset = Math.floor(Math.random() * 60 * 60 * 1000); // milliseconds in an hour
  const randomDate = new Date(now.getTime() - offset);
  return randomDate.toISOString();
}

//using arrays instead of database as I am yet to learn Database.
let tweets = [
  {
    id: uuid(),
    text: "Just had the best coffee in town! ☕️ #coffeelover",
    created_at: getRandomDateWithinLastHour(),
    username: "Joe Brew",
    retweet_count: 12,
    like_count: 45,
    reply_count: 3,
    quote_count: 1,
  },
  {
    id: uuid(),
    text: "Can't believe how good the game was last night! 🏀🔥",
    created_at: getRandomDateWithinLastHour(),
    username: "Sam Dunk",
    retweet_count: 89,
    like_count: 230,
    reply_count: 19,
    quote_count: 8,
  },
  {
    id: uuid(),
    text: "New blog post: How to master async in JavaScript 🔄👉 https://t.co/jsTips",
    created_at: getRandomDateWithinLastHour(),
    username: "Elena Dev",
    retweet_count: 54,
    like_count: 120,
    reply_count: 10,
    quote_count: 5,
  },
  {
    id: uuid(),
    text: "RT @nasa: We’ve landed on Mars again 🚀🌌 #Mars2025",
    created_at: getRandomDateWithinLastHour(),
    username: "Skyler Moon",
    retweet_count: 0,
    like_count: 0,
    reply_count: 0,
    quote_count: 0,
  },
  {
    id: uuid(),
    text: "Happy #NationalPetDay to my furry buddy 🐶❤️",
    created_at: getRandomDateWithinLastHour(),
    username: "Lola Paws",
    retweet_count: 67,
    like_count: 200,
    reply_count: 25,
    quote_count: 4,
  },
  {
    id: uuid(),
    text: "Replying to @elonmusk – any update on Starship launch?",
    created_at: getRandomDateWithinLastHour(),
    username: "Neo Orbit",
    retweet_count: 0,
    like_count: 5,
    reply_count: 2,
    quote_count: 0,
  },
  {
    id: uuid(),
    text: "Markets are wild today 📉 $TSLA and $AAPL both dipping hard. #StockMarket",
    created_at: getRandomDateWithinLastHour(),
    username: "Mina Capital",
    retweet_count: 34,
    like_count: 78,
    reply_count: 14,
    quote_count: 6,
  },
  {
    id: uuid(),
    text: "Check out my latest track 🎧 https://t.co/beatdrop #NewMusic",
    created_at: getRandomDateWithinLastHour(),
    username: "DJ Byte",
    retweet_count: 20,
    like_count: 100,
    reply_count: 7,
    quote_count: 2,
  },
  {
    id: uuid(),
    text: "Big thanks to @openai for changing the game again 🔥 #AI #GPT4",
    created_at: getRandomDateWithinLastHour(),
    username: "Raj Patel",
    retweet_count: 140,
    like_count: 320,
    reply_count: 30,
    quote_count: 11,
  },
  {
    id: uuid(),
    text: "“The best way to get started is to quit talking and begin doing.” – Walt Disney #MotivationMonday",
    created_at: getRandomDateWithinLastHour(),
    username: "Daily Quote",
    retweet_count: 75,
    like_count: 190,
    reply_count: 6,
    quote_count: 3,
  },
];

//Default redirect to Index.
app.get("/", (req, res) => {
  res.redirect("/tweets");
});

//Index Route
app.get("/tweets", (req, res) => {
  res.render("index", { tweets });
});

//Create Form to add new Tweet.
app.get("/tweets/new", (req, res) => {
  res.render("new");
});

//CREATE Route using POST request
app.post("/tweets", (req, res) => {
  const { text, username } = req.body;
  tweets.push({
    id: uuid(),
    text,
    created_at: getRandomDateWithinLastHour(),
    username,
    retweets_count: Math.floor(Math.random() * 100),
    like_count: Math.floor(Math.random() * 300),
    reply_count: Math.floor(Math.random() * 50),
    retweet_count: Math.floor(Math.random() * 20),
    quote_count: Math.floor(Math.random() * 20),
  });
  res.redirect("/tweets");
});

//SHOW Route
app.get("/tweets/:id", (req, res) => {
  const { id } = req.params;
  const tweet = tweets.find((twt) => twt.id === id);
  res.render("show", { tweet });
});

//GET request for a Form to update the tweet.
app.get("/tweets/:id/edit", (req, res) => {
  const { id } = req.params;
  const tweet = tweets.find((twt) => twt.id === id);
  res.render("edit", { tweet });
});

//UPDATE Route
app.patch("/tweets/:id", (req, res) => {
  const { id } = req.params;
  const newTweet = req.body.text;
  const previousTweet = tweets.find((twt) => twt.id === id);
  previousTweet.text = newTweet;
  res.redirect(`/tweets/${previousTweet.id}`);
});

//DELETE Route
app.delete("/tweets/:id", (req, res) => {
  const { id } = req.params;
  tweets = tweets.filter((twt) => twt.id !== id); //filtering the array for which the id doesnt match, and then adding them to a new array.
  //not mutating the previous array as it is a good practice to create a fresh array.
  res.redirect("/tweets");
});

//default page for wrong urls
app.use((req, res) => {
  res.render("default");
});

app.listen(port, (req, res) => {
  console.log("Listening on port: ", port);
});

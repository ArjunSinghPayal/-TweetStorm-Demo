# -TweetStorm-Demo
Author : Arjun Singh Payal


🐦 TweetStorm Demo

Welcome to TweetStorm, a mini Twitter clone built with Express.js – where RESTful routes rule the roost and tweets live in memory (literally).

This is a simple (but mighty) demo app that showcases how to build a RESTful Express app using:

    🛠 Express.js – the web server wizard

    🧠 EJS – for server-side templating that speaks HTML

    🌀 method-override – to let you use PUT & DELETE like a boss

    🆔 uuid – for creating unique tweet IDs (because every tweet deserves its own identity)

Instead of a database, we're using a good ol' array to store tweets.
No Mongo, no SQL – just JavaScript variables holding your hot takes.

Don't expect Tailwind or Bootstrap magic here — the frontend uses bare-bones HTML with EJS.
Think "early 2000s web nostalgia" vibes. It's not pretty, but it gets the job done.

      \
       \
        🐤  TweetStorm says:
        "REST is best!"

🔧 Features

    🖼 RESTful routing for full CRUD tweet management

    💬 Views and partials using EJS templating

    ✍️ Form method override to enable PUT and DELETE from the browser

    🧩 Modular, clean Express structure

    📦 All powered by lightweight npm packages

🚀 Usage Example

npm install
node index.js

Open your browser and head to:

http://localhost:8080/tweets

From there you can:

    ✏️ Create a new tweet

    📄 Read all tweets or just one

    🔁 Update your tweet (only if you change your mind)

    ❌ Delete that tweet you immediately regret

📁 Folder Structure

tweetstorm/
├── views/
│   ├── tweets/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   └── edit.ejs
│   └── partials/
│       └── header.ejs
├── public/          <-- (if you want to throw in some CSS later)
├── index.js         <-- main Express app
├── package.json

🧪 Tech Stack

    Node.js + Express.js for backend logic

    EJS for server-side templates

    method-override for HTTP verb support

    uuid for unique tweet identification

    Zero database – all tweets live in RAM until you restart the server

🤓 Why This Exists

This project is a great way to:

    Learn how RESTful routing works

    Understand Express middleware

    Practice using forms and method-override

    Get cozy with EJS and server-rendered HTML

    Build something fun without worrying about styling or databases

📢 Final Word

It’s not pretty, it’s not persistent, but it’s TweetStorm —
a chirpy little playground for learning and experimenting with Express.

Now go ahead and make some noise 🐥💬

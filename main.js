const express = require("express");
const PORT = 8080;
const app = express();
const database = require('./db');

// Initialize database connection
database();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Dependencies
const express = require("express");
require('dotenv').config();
// const path = require('path');

// Define port depending on environment
const PORT = process.env.PORT || 3001;

// Set up the Express App
const app = express();

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets (in production)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Import routes
require("./mail-routes")(app);

// Controls
// Send every GET request to the React app
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// Send an error for every other POST request that's not mail related
app.post("*", (req, res) => {
    res.status(404).send('Resource Not Found');
});
// Send an error for every PUT request
app.put("*", (req, res) => {
    res.status(404).send('Resource Not Found');
});
// Send an error for every DELETE request
app.delete("*", (req, res) => {
    res.status(404).send('Resource Not Found');
});

// Start server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
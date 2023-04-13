// Import required modules
const express = require('express');

// Create a new router instance
let router = express.Router();

// Import SQLite module and create a new database instance
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

// Define a GET route that retrieves all comments from the database and returns them as a JSON response
router.get('/', async (req, res) => {
    const commentList = await getAllComments();
    res.jsonp(commentList);
})

// Define a function that retrieves all comments from the database using a Promise
function getAllComments() {
    return new Promise((res, rej) => {
        db.serialize(() => {
            db.all("SELECT * FROM comments", (err, rows) => {
                if (err) {
                    // console.error(err.message);
                    res.status(500).json({ error: err.message })
                }

                res.status(200).json({ tables: rows })
            })
        })
    });
}

module.exports = router;
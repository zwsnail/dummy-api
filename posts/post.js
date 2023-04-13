const express = require('express');
let router = express.Router();

// Import the sqlite3 module and create a new database instance
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

// Define a GET route for fetching all posts
router.get('/', async (req, res) => {
    const postList = await getAllPosts();
    res.jsonp(postList);
})

// Define the function for retrieving all posts
function getAllPosts() {
    return new Promise((res, rej) => {
        db.serialize(() => {
            db.all('SELECT * FROM posts', (err, rows) => {
                if (err) {
                    // console.error(err.message);
                    res.status(500).json({ error: err.message })
                }

                res.status(200).json({ tables: rows })
            })
        })
    })
}

module.exports = router;
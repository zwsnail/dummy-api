// Import required modules
const express = require('express');
// Create a router instance
let router = express.Router();

// Import SQLite3 and connect to the database file
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

// Define a route to handle GET requests to the root path
router.get('/', async (req, res) => {
    const userList = await getAllUsers();
    res.jsonp(userList);
})

// Define a function to retrieve all users from the database
function getAllUsers() {

    return new Promise((res, rej) => {
        // Use the database connection to retrieve all users
        db.serialize(() => {
            db.all("SELECT * FROM users", (err, rows) => {
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
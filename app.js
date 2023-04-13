// Import required modules
const express = require('express')
const router = express.Router()
const userRouter = require('./users/user')
const postRouter = require('./posts/post')
const commentRouter = require('./comments/comment')
const app = express()
const port = 3000

// Create Express app and set port number
app.listen(port, () => {
    console.log(`Example app listening on port ${port} \nURL: http://localhost:${port}`)
})

// Start server and log URL to console
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

// Set up 404 response for any unknown requests
app.use(function (req, res) {
    res.send('404 not found');
});
#AwesomePostsPage Backend API
AwesomePostsPage is a web application that allows users to view and post content related to a particular topic. It is built using Create React App and Node.js.

1. Installation
   `npm install` 
   This will install all required dependencies.

2. Usage
   To start the application server, run the following command:
   `node app.js`
   The server will start listening on port 3000.

3. Endpoints
   `/posts`: Returns a list of all posts.
   `/users`: Returns a list of all users.
   `/comments`: Returns a list of all comments.
   All other endpoints will return a ❗"404 not found"❗ message.

4. Example
   To retrieve all posts, navigate to the following URL:
   `http://localhost:3000/posts`
   This will return a JSON array of all posts.
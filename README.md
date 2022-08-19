# First Express App

A basic Node JS Express App using an MVC approach. 

Items can be added and deleted. 

The main branch connects to mongodb, displaying the items stored on the 'test' database, 'items' collection.

The no-db does not connect to a database, initialising with a fixed dataset when the server restarts, stored in [controllers/itemController.js](controllers/itemController.js)

This project has been developed by following this [Youtube tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU).

This project is run by the following commands: 

`npm install`

`nodemon app.js`

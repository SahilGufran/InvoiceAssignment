Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

Open the project in your prefered code editor.
Go to terminal -> New terminal (If you are using VS code)
Split your terminal into two (run the client on one terminal and the server on the other terminal)
In the first terminal

cd client and create a .env file in the root of your client directory.
Supply the following credentials
REACT_APP_API = http://localhost:5000
REACT_APP_URL = http://localhost:3000

$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
In the second terminal

cd server and create a .env file in the root of your server directory.
Supply the following credentials
DB_URL = 
PORT = 5000
SECRET = 

Please follow This tutorial to create your mongoDB connection url, which you'll use as your DB_URL

$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)

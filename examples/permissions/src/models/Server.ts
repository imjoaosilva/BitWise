import express, { Application } from 'express';
import bodyParser from 'body-parser';

export default class Server {

    // Creating a private variable of type Application (express.Application)
    private app: Application;

    // Creating a constructor to initialize the app variable
    constructor() {

        // Initializing the app variable with express
        this.app = express();
    }

    // Creating a method to start the server
    start = () => {

        // Creating a variable to store the port number (default: 3000)
        let PORT = process.env.PORT || 3000;

        // Using body-parser to parse JSON bodies into JS objects
        this.app.use(bodyParser.json());

        // Starting the server on the specified port
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }

}
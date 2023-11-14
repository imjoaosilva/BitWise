import express, { Application } from 'express';

export default class Server {

    // Creating a private variable of type Application (express.Application)
    private app: express.Application;

    // Creating a constructor to initialize the app variable
    constructor() {

        // Initializing the app variable with express
        this.app = express();
    }

    // Creating a method to start the server
    start = () => {

        // Creating a variable to store the port number (default: 3000)
        let PORT = process.env.PORT || 3000;

        // Starting the server on the specified port
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }

}
import express, { Application } from 'express';

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
        const PORT = process.env.PORT || 3000;

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));


        // Starting the server on the specified port
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }

}
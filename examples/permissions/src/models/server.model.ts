import express, { Application, Request } from 'express';
import user_route from '../routes/user.route';
import auth_route from '../routes/auth.route';

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

        // Adding middleware to parse JSON data
        this.app.use(express.json());

        // Adding middleware to parse urlencoded data
        this.app.use(express.urlencoded({ extended: true }));

        // Adding user route
        this.app.use('/api/v1/user', user_route)

        // Adding auth route
        this.app.use('/api/v1/auth', auth_route)

        // Starting the server on the specified port
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }

}
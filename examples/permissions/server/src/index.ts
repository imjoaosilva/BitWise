import 'dotenv/config';
import Server from './models/server.model';

// Creating a new instance of Server
const server = new Server();

// Starting the server
server.start();
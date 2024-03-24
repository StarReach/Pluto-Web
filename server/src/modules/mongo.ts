// Load Modules
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

// Access environment variables from local .env file
// PORT is 4000 but for the MONGO_URI you may need to create your own database for testing this application and store it's uri in a .env file.
dotenv.config()
// If you want to access the real database we use, then you better ask the project's admins or moderators for uri.

// Initialize MongoDB Client
export const mongoClient = new MongoClient(process.env.MONGO_URI || '') // Will error if env isn't present

export const mongoDb = mongoClient.db("Pluto") // Adding the mongodb data base "PLuto"

export const mongoCollections = {
    // Exacmple Collection. To initiate types just write
    // mongoDb.collection<TypeName>("CollectionName") 
    users: mongoDb.collection("Users"), 
}
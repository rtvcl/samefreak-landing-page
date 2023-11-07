import { Query, ID } from "node-appwrite";


const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();


client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_SECRET_KEY) // Your secret API key

export const database = new sdk.Databases(client);


export const checkWaitlist = async (email) => {
    const response = await database.listDocuments(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_COLLECTION_WAITLIST_ID,
        [Query.equal('email', email)]
    )
    return response
}

export const createWaitlist = async (email) => {
    const response = await database.createDocument(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_COLLECTION_WAITLIST_ID, ID.unique(),
        { email }
    )
    return response
}
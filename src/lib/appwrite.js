import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT } from "$env/static/public";
 
import { Client, Account, Databases } from "appwrite";

if (!PUBLIC_APPWRITE_ENDPOINT || !PUBLIC_APPWRITE_PROJECT) {
    throw new Error('Appwrite endpoint or project is missing from environment variables')
}

const client = new Client();

client
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT)

const account = new Account(client);
const databases = new Databases(client);

export const appwrite = {
    client, 
    account, 
    databases,
};
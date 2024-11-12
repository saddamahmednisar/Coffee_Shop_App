import {Client, Databases} from 'appwrite';

export const client = new Client();

client.setProject('672b41eb0015b407f7d9');
client.setEndpoint('https://cloud.appwrite.io/v1')

 export const databases = new Databases(client)

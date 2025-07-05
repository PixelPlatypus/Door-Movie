import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setPlatform(process.env.APPWRITE_PLATFORM)

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)
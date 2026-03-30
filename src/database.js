import { MongoClient, ServerApiVersion } from 'mongodb';
import "dotenv/config"

const uri = process.env.DB_URI;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


import {MongoClient, Db} from 'mongodb';
const uri=process.env.MONGODB_URI; if(!uri) console.warn('MONGODB_URI is not configured');
const globalForMongo=globalThis as unknown as {mongo?:{client:MongoClient;db:Db}};
export async function getDb(){if(!uri) throw new Error('MONGODB_URI is missing'); if(!globalForMongo.mongo){const client=new MongoClient(uri);await client.connect();globalForMongo.mongo={client,db:client.db(process.env.MONGODB_DB||'circulink')}} return globalForMongo.mongo.db;}
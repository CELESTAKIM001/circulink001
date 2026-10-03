import {MongoClient} from 'mongodb'; import bcrypt from 'bcryptjs';
const uri=process.env.MONGODB_URI; if(!uri) throw new Error('MONGODB_URI missing');
const client=new MongoClient(uri); await client.connect(); const db=client.db(process.env.MONGODB_DB||'circulink');
const email=process.env.ADMIN_EMAIL||'circulink1@gmail.com'; const password=process.env.ADMIN_PASSWORD;
if(!password) throw new Error('Set ADMIN_PASSWORD before running this script');
const passwordHash=await bcrypt.hash(password,12);
await db.collection('users').updateOne({email},{$set:{name:'CIRCULINK Administrator',email,role:'admin',emailVerified:true,passwordHash,updatedAt:new Date()},$setOnInsert:{createdAt:new Date()}},{upsert:true});
console.log(`Admin seeded: ${email}`); await client.close();

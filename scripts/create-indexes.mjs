import {MongoClient} from 'mongodb';
const client=new MongoClient(process.env.MONGODB_URI); await client.connect(); const db=client.db(process.env.MONGODB_DB||'circulink');
await Promise.all([db.collection('users').createIndex({email:1},{unique:true}),db.collection('otps').createIndex({expiresAt:1},{expireAfterSeconds:0}),db.collection('materials').createIndex({status:1,createdAt:-1}),db.collection('orders').createIndex({orderId:1},{unique:true}),db.collection('payments').createIndex({checkoutRequestId:1},{unique:true,sparse:true}),db.collection('receipts').createIndex({receiptId:1},{unique:true}),db.collection('notifications').createIndex({createdAt:-1})]);
console.log('CIRCULINK indexes ready'); await client.close();

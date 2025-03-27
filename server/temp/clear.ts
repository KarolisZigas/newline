require('dotenv').config();
import { connectDatabase } from '../src/database';

const clear = async () => {
    try {
        console.log('[seed]: running...');

        const db = await connectDatabase();

        const bookings = await db.bookings.find({}).toArray();
        const listings = await db.listings.find({}).toArray();
        const users = await db.users.find({}).toArray();

        if (bookings.length > 0) {
            await db.bookings.drop();
        }

        if (users.length > 0) {
            await db.users.drop();
        }
        
        if (listings.length > 0) {
            await db.listings.drop();
        }


        console.log('[seed]: success');
    } catch (error) {
        throw new Error('failed to seed database');
    }
}

clear();
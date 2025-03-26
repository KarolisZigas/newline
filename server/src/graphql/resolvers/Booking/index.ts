import { IResolvers } from '@graphql-tools/utils';
import { Database, Booking } from '../../../lib/types';
import { InsertOneResult, ObjectId } from 'mongodb';

export const bookingResolvers: IResolvers = {
    Query: {
        bookings: async (
            _root: undefined,
            _args: {},
            { db }: { db: Database }
        ): Promise<Booking[]> => {
            return await db.bookings.find({}).toArray();
        }
    },
    Mutation: {
        createBooking: async (
            _root: undefined,
            { id }: { id: string },
            { db }: { db: Database }
        ): Promise<Booking> => {

            const getListing = await db.listings.findOne({
                _id: new ObjectId(id)
            })

            if (!getListing) {
                throw new Error('Unable to get booking.');
            }

            const updateListing = await db.listings.updateOne({
                _id: new ObjectId(id)
            }, {
                $inc: { numOfBookings: 1 }
            })

            if (!updateListing.modifiedCount) {
                throw new Error('Failed to update listing');
            }

            const { title, address, image } = getListing;

            const createBooking = await db.bookings.insertOne({
                _id: new ObjectId(),
                title: title,
                address: address,
                image: image,
                timestamp: new Date().toISOString()
            })

            const insertedBooking = await db.bookings.findOne({
                _id: createBooking.insertedId
            })

            if (!insertedBooking) {
                throw new Error('Unable to create a booking');
            }

            return insertedBooking;
        }
    },
    Booking: {
        id: (booking: Booking): string => booking._id.toString()
    }
}
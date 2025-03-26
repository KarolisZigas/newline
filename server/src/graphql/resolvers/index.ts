import merge from 'lodash.merge';
import { listingResolvers } from './Listing';
import { bookingResolvers } from './Booking';

export const resolvers = merge(listingResolvers, bookingResolvers);
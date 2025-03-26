import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Booking {
        id: ID!
        title: String!
        image: String!
        address: String!
        timestamp: String!
    }

    type Listing {
        id: ID!
        title: String!
        description: String!
        address: String!
        image: String!
        price: Int!
        numOfGuests: Int!
        numOfBeds: Int!
        numOfBaths: Int!
        rating: Int!
        numOfBookings: Int!
    }

    type Query {
        listings: [Listing!]!
        bookings: [Booking!]!
    }

    type Mutation {
        deleteListing(id: ID!): Listing!
        createBooking(id: ID!): Booking!
    }
`
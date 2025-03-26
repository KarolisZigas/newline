import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Booking = {
  __typename?: 'Booking';
  address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Listing = {
  __typename?: 'Listing';
  address: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  numOfBaths: Scalars['Int']['output'];
  numOfBeds: Scalars['Int']['output'];
  numOfBookings: Scalars['Int']['output'];
  numOfGuests: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBooking: Booking;
  deleteListing: Listing;
};


export type MutationCreateBookingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteListingArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  bookings: Array<Booking>;
  listings: Array<Listing>;
};

export type BookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type BookingsQuery = { __typename?: 'Query', bookings: Array<{ __typename?: 'Booking', id: string, title: string, image: string, address: string, timestamp: string }> };

export type ListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingsQuery = { __typename?: 'Query', listings: Array<{ __typename?: 'Listing', id: string, title: string, image: string, address: string, price: number, numOfGuests: number, numOfBeds: number, numOfBaths: number, rating: number, numOfBookings: number }> };

export type DeleteListingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteListingMutation = { __typename?: 'Mutation', deleteListing: { __typename?: 'Listing', id: string } };

export type CreateBookingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: { __typename?: 'Booking', id: string } };


export const BookingsDocument = gql`
    query Bookings {
  bookings {
    id
    title
    image
    address
    timestamp
  }
}
    `;

/**
 * __useBookingsQuery__
 *
 * To run a query within a React component, call `useBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookingsQuery(baseOptions?: Apollo.QueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
      }
export function useBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
        }
export function useBookingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
        }
export type BookingsQueryHookResult = ReturnType<typeof useBookingsQuery>;
export type BookingsLazyQueryHookResult = ReturnType<typeof useBookingsLazyQuery>;
export type BookingsSuspenseQueryHookResult = ReturnType<typeof useBookingsSuspenseQuery>;
export type BookingsQueryResult = Apollo.QueryResult<BookingsQuery, BookingsQueryVariables>;
export const ListingsDocument = gql`
    query Listings {
  listings {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    numOfBaths
    rating
    numOfBookings
  }
}
    `;

/**
 * __useListingsQuery__
 *
 * To run a query within a React component, call `useListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListingsQuery(baseOptions?: Apollo.QueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
      }
export function useListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
        }
export function useListingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
        }
export type ListingsQueryHookResult = ReturnType<typeof useListingsQuery>;
export type ListingsLazyQueryHookResult = ReturnType<typeof useListingsLazyQuery>;
export type ListingsSuspenseQueryHookResult = ReturnType<typeof useListingsSuspenseQuery>;
export type ListingsQueryResult = Apollo.QueryResult<ListingsQuery, ListingsQueryVariables>;
export const DeleteListingDocument = gql`
    mutation DeleteListing($id: ID!) {
  deleteListing(id: $id) {
    id
  }
}
    `;
export type DeleteListingMutationFn = Apollo.MutationFunction<DeleteListingMutation, DeleteListingMutationVariables>;

/**
 * __useDeleteListingMutation__
 *
 * To run a mutation, you first call `useDeleteListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListingMutation, { data, loading, error }] = useDeleteListingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteListingMutation, DeleteListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteListingMutation, DeleteListingMutationVariables>(DeleteListingDocument, options);
      }
export type DeleteListingMutationHookResult = ReturnType<typeof useDeleteListingMutation>;
export type DeleteListingMutationResult = Apollo.MutationResult<DeleteListingMutation>;
export type DeleteListingMutationOptions = Apollo.BaseMutationOptions<DeleteListingMutation, DeleteListingMutationVariables>;
export const CreateBookingDocument = gql`
    mutation CreateBooking($id: ID!) {
  createBooking(id: $id) {
    id
  }
}
    `;
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, options);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
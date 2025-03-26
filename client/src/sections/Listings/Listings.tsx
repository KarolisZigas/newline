import { useQuery, useMutation, gql } from '@apollo/client'
import { ListingsQuery, MutationCreateBookingArgs, DeleteListingMutation, DeleteListingMutationVariables } from "../../generated/graphql";
import { Alert, Button, List, Avatar, Spin } from 'antd';
import { ListingSkeleton } from './components';
import './styles/Listings.css'

const LISTINGS = gql`
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

const DELETE_LISTING = gql`
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }
`;

const CREATE_BOOKING = gql`
    mutation CreateBooking($id: ID!) {
        createBooking(id: $id) {
            id
        }
    }
`;

interface Props { 
    title: string;
}

export const Listings = ({ title }: Props) => {
    const { data, loading, error, refetch } = useQuery<ListingsQuery>(LISTINGS);

    const [
    deleteListing, 
    { 
        loading: deleteListingLoading, 
        error: deleteListingError 
    }
    ] = useMutation<
    DeleteListingMutation,
    DeleteListingMutationVariables
    >(DELETE_LISTING);

    const [
    createBooking, 
    { 
        loading: createBookingLoading, 
        error: createBookingError 
    }
    ] = useMutation<
    MutationCreateBookingArgs
    >(CREATE_BOOKING, {
        refetchQueries: ['Bookings'],
        awaitRefetchQueries: true
    });

    const handleCreateBooking = async (id: string) => {
        await createBooking({ variables: { id } });
        refetch();
    }

    const handleDeleteListing = async (id: string) => {
        await deleteListing({ variables: { id } });
        refetch();
    }

    const listings = data ? data.listings : null;

    const listingsList = listings ? (
        <List 
            itemLayout='horizontal' 
            dataSource={listings} 
            renderItem={(listing) => (
                <List.Item 
                actions={[
                    <Button
                        type="primary"
                        onClick={() => handleCreateBooking(listing.id)}
                    >Book</Button>,
                    <Button 
                        type="primary" 
                        onClick={() => handleDeleteListing(listing.id)}>Delete</Button>
                    ]}>
                        <List.Item.Meta 
                            title={listing.title} 
                            description={listing.address} 
                            avatar={
                                <Avatar 
                                    src={listing.image} 
                                    shape='square'
                                    size={48}
                                />
                            }/>
                        {listing.numOfBookings > 0 && (
                            <div>{listing.numOfBookings}x booked</div>
                        )}
                </List.Item>
            )}/>
        ) : null;

    if (loading) {
        return (
            <div className='listings'>
                <ListingSkeleton title={title} />
            </div>
        )
    }

    if (error) {
        return (
            <div className='listings'>
                <ListingSkeleton title={title} error />
            </div>
        )
    }

    const createBookingErrorAlert = createBookingError
    ? (
        <Alert
            type='error'
            message='Couldnt create a booking. Something went wrong. Please try again'
            className='listings-skeleton__alert'
        />
    ) : null;

    const deleteListingErrorAlert = deleteListingError
    ? (
        <Alert
            type="error"
            message="Uh oh! Something went wrong- please try again later :(" 
            className="listings-skeleton__alert"
        />
    ) : null;

    return (
        <div className='listings'>
            <Spin spinning={deleteListingLoading || createBookingLoading}>
                {deleteListingErrorAlert}
                {createBookingErrorAlert}
                <h2>{title}</h2>
                {listingsList}
            </Spin>
        </div>
    )
};
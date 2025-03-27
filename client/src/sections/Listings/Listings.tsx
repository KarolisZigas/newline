import { useQuery, useMutation, gql } from '@apollo/client'
import { ListingsQuery, DeleteListingMutation, DeleteListingMutationVariables } from "../../generated/graphql";
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

export const Listings = () => {
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
                </List.Item>
            )}/>
        ) : null;

    if (loading) {
        return (
            <div className='listings'>
                <ListingSkeleton title={"title"} />
            </div>
        )
    }

    if (error) {
        return (
            <div className='listings'>
                <ListingSkeleton title={"title"} error />
            </div>
        )
    }

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
            <Spin spinning={deleteListingLoading}>
                {deleteListingErrorAlert}
                <h2>TinyHouse Listings</h2>
                {listingsList}
            </Spin>
        </div>
    )
};
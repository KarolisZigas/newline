import { useQuery, gql, NetworkStatus } from '@apollo/client'
import { BookingsQuery } from "../../generated/graphql";
import { List, Avatar, Spin } from 'antd';
import { ListingSkeleton } from './components';
import './styles/Listings.css'
import { time } from 'console';

export const BOOKINGS = gql`
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

interface Props { 
    title: string;
}

export const Bookings = ({ title }: Props) => {
    const formatDate = (timestamp: string) => {
        return new Date(timestamp).toLocaleString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
    }

    const { data, loading, error, networkStatus } = useQuery<BookingsQuery>(BOOKINGS, {
        notifyOnNetworkStatusChange: true
    });

    const isRefetching = networkStatus === NetworkStatus.refetch;

    console.log(isRefetching);

    const bookings = data ? [...data.bookings].sort((a, b) => {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    }) : null;

    const bookingsList = bookings ? (
        <List 
            itemLayout='horizontal' 
            dataSource={bookings} 
            renderItem={(booking) => (
                <List.Item 
                actions={[]}>
                        <List.Item.Meta 
                            title={booking.title} 
                            description={booking.address} 
                            avatar={
                                <Avatar 
                                    src={booking.image} 
                                    shape='square'
                                    size={48}
                                />
                            }/>
                        {booking.timestamp && (
                            <div>{formatDate(booking.timestamp)}</div>
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

    return (
        <div className='listings'>
            <Spin spinning={isRefetching}>
                <h2>{title}</h2>
                {bookingsList}
            </Spin>
        </div>
    )
};
import { IResolvers } from '@graphql-tools/utils';

export const viewerResolvers: IResolvers = {
    Query: {
        authUrl: () => {
            return 'Query.authUrl';
        }
    },
    Mutation: {
        logIn: () => {
            return 'Query.logIn';
        },
        logOut: () => {
            return 'Query.logOut';
        }
    }
}
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link';
import { RetryLink } from 'apollo-link-retry';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import errorhandlerLink from './apollolinks/errorhandler';


export default function(Vue){
    const httpLink = new HttpLink({
        // You should use an absolute URL here
        uri: 'http://localhost:3000/graphql',
    });
    const links = ApolloLink.from([
        // RetryLink,
        errorhandlerLink,
        httpLink,
    ])

    // Create the subscription websocket link
    // const wsLink = new WebSocketLink({
    //     uri: 'ws://localhost:3000/subscriptions',
    //     options: {
    //         reconnect: true,
    //     },
    // });

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    // const link = split(
    //     // split based on operation type
    //     ({ query }) => {
    //         const { kind, operation } = getMainDefinition(query)
    //         return kind === 'OperationDefinition' &&
    //         operation === 'subscription'
    //     },
    //     // wsLink,
    //     httpLink
    // );

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link: links,
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });

    // Install the vue plugin
    Vue.use(VueApollo)
    // Create a provider
    const provider =  new VueApollo({
        defaultClient: apolloClient,
    });
    return provider;
}
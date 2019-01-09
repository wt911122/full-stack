import { onError } from "apollo-link-error";

const graphQLErrorHandler = ({ extensions, message }) => {
    switch(extensions.code) {
        case "UNAUTHENTICATED":
            window.location.replace('/login');
            break;
        default:
            // window.location.replace('/login');
            break;
    }
}

const link = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(graphQLErrorHandler)
        // graphQLErrors.map((some) =>
        // console.log(some)
        // //   console.log(
        // //     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        // //   ),
        // );
    }



    if (networkError) console.log(`[Network error]: ${networkError}`);
});
export default link;
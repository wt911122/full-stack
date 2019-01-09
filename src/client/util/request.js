function graphqlRq(gpl){
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: gpl})
    })
    .then(r => r.json())
}
export {
    graphqlRq
}
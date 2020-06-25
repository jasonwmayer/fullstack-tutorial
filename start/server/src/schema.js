const { gql } = require('apollo-server');

const typeDefs = gql`
 type Ports {
        ID: Id!
        NAME: Name!
        CITY: City
        STATE: State
    }
    
`;
module.exports = typeDefs;
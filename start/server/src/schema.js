const { gql } = require('apollo-server');
const typeDefs = gql` 

    type Trip {
        id:ID!
        utid: Utid
        vessel: String!
        efforts: Efforts
        isboked: Boolean!
    } 

    type User {
        id:ID!
        utid: Utid
        email: String!
        tripid: [TripID]!
    }

    type Utid {
        uid: UID!
        email: String!
        tripid: [TripID]!
    } 
      
    type Efforts {
        name: String
        effortsPatch(size: PatchSize): String
    }
  
    enum PatchSize {
        SMALL
        LARGE
    } 

    type Query {
        Trips: [Trip]!
        trip(id: ID!): Trip
        me: User
      }  
      
      type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): String # login token
      }
    
`;



module.exports = typeDefs;
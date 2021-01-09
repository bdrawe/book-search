const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        getUser(username: String!, password: String!): User
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        removeFavoriteBook(bookId: String!, username: String!): [Book]
        addFavoriteBook(bookId: String!, username: String!) : [Book]
        loginUser(email: String!, password: String!) : User
    }
    
`;

module.exports = typeDefs;
//Queries
//allBooks: Get all Books
//searchBooksByTitle: Search Books filtered by title
//getUser: Get user to log in

//Mutations
//removeFavoriteBook: Delete savedBook from User savedBooks list
//addFavoriteBook: Add savedBook to User savedBooks list
//createUser: Add a new User
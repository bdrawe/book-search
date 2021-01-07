const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        username: String
        email: String
        savedBooks: [Book]
    }

    type Book {
        authers: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    



`
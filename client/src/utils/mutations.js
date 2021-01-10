import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation saveBook($input: BookInput) {
        saveBook(input: $input) {
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                }
            }
        }
    }
`;
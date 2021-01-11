import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput){
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

export const REMOVE_BOOK = gql`
    mutation removeBook($id: ID!) {
        removeBook(bookId: $BookId) {
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
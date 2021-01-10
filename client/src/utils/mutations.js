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
    mutation saveBook($authors: [String], $description: String!, $bookId: String!, $title: String!, $image: String, $link: String) {
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            _id
            authors
            title
            description
            bookId
            image
            link
            user {
                _id
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($id: ID!) {
        removeBook(id: $id) {
            _id
            user {
                _id
            }
        }
    }
`;
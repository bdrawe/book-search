// const { Book } = require('../models/Book');
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const profile = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate(savedBooks);
                return profile;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUserBook = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: bookId}},
                    { new: true },
                ).populate('books');

                return updatedUserBook;
            }
            throw new AuthenticationError('Not logged in');
        },

        saveBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUserBook = await Book.create({...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: { savedBooks: book._id}},
                    {new: true}
                ).populate('books');
                return updatedUserBook;
            }
            throw new AuthenticationError("Not Logged in");
        },

        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return { user, token }
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect Username');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect Password")
            }
            const token = signToken(user);
            return { token, user }
        }
    }
}

module.exports = resolvers;

//Queries
//allBooks: Get all Books
//searchBooksByTitle: Search Books filtered by title
//getUser: Get user to log in

//Mutations
//removeFavoriteBook: Delete savedBook from User savedBooks list
//addFavoriteBook: Add savedBook to User savedBooks list
//createUser: Add a new User

// type Query {
//     allBooks: [Book]
//     searchBooksByTitle(title: String!): [Book]
//     getUser(username: String!, password: String!): User
// }
// type Mutation {
//     createUser(userusname: String!, email: String!, password: String!): User
//     removeFavoriteBook(bookId: String!, username: String!): Book
//     addFavoriteBook(bookId: String!, username: String!) : Book
// }
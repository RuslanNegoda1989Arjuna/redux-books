import { createReducer } from "@reduxjs/toolkit";

import { addBook, deleteBook } from "./actions-book";

const bookInitialState = [];

const booksReducer = createReducer(bookInitialState, {
    [addBook]: (state, action) => {
        state.push(action.payload);
    },
    [deleteBook]: (state, action) => {
        return state.filter(task => task.id !== action.payload);
    },
})
export default booksReducer;
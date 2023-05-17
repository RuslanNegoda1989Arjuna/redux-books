import { createReducer } from "@reduxjs/toolkit";

import { addBook, deleteBook } from "./action-book";

const bookInitialState = [];

export const booksReducer = createReducer(bookInitialState, {
    [addBook]: (state, action) => {
        state.push(action.payload);
    },
    [deleteBook]: (state, action) => {
        return state.filter(task => task.id !== action.payload);
    },
})
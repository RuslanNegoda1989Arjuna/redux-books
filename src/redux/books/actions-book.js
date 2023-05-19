import { createAction, nanoid } from "@reduxjs/toolkit";

export const addBook = createAction("book/addBook", data => {
    return {
        payload: {
            id: nanoid(),
            ...data,
        }
    }
});

export const deleteBook = createAction("book/deleteBook");

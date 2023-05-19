import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/reducer-book";
import filterReducer from "./filter/reducer-filter";

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer
    }
})

export default store;
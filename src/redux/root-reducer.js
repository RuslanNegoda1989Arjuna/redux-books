import { combineReducers } from "redux";

import booksReducer from "./books/books-slice";
import filterReducer from "./filter/filter-slice";

const rootReduser = combineReducers({
    books: booksReducer,
    filter: filterReducer,
})

export default rootReduser;
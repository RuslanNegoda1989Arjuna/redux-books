import { combineReducers } from "redux";

import booksReducer from "./books/books-slice";
import filterReducer from "./filter/reducer-filter";

const rootReduser = combineReducers({
    books: booksReducer,
    filter: filterReducer,
})

export default rootReduser;
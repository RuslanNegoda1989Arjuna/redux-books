import { combineReducers } from "redux";

import booksReducer from "./books/reducer-book";
import filterReducer from "./filter/reducer-filter";

const rootReduser = combineReducers({
    books: booksReducer,
    filter: filterReducer,
})

export default rootReduser;
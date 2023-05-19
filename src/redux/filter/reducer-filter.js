import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./actions-filter";

const filterReducer = createReducer("", builder => {
    builder.addCase(setFilter, (_, {payload}) => payload)
})
export default filterReducer;
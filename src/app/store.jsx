import { configureStore } from "@reduxjs/toolkit";
import JournalSlice from "./state/JournalSlice";
import PageSlice from "./state/PageSlice";
import UserDataSlice from "./state/UserDataSlice";

export default configureStore({
    reducer: {
        journal: JournalSlice,
        page: PageSlice,
        userData: UserDataSlice
    }
})
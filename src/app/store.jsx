import { configureStore } from "@reduxjs/toolkit";
import JournalSlice from "./state/JournalSlice";
import PageSlice from "./state/PageSlice";
import PromptSlice from "./state/PromptSlice";
import UserDataSlice from "./state/UserDataSlice";

export default configureStore({
    reducer: {
        journal: JournalSlice,
        page: PageSlice,
        userData: UserDataSlice,
        prompt: PromptSlice
    }
})
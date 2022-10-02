import { configureStore } from '@reduxjs/toolkit';
import uiReducer from "./reducer/uiReducer";
import mainPageReducer from "./reducer/mainPageReducer";


export const store = configureStore({
  reducer: {
    ui: uiReducer,
    mainPageData: mainPageReducer
  },
})
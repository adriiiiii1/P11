
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer'; 
import { api } from './API'; 

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});
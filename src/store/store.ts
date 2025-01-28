import { combineReducers, configureStore } from '@reduxjs/toolkit';
import galleryApi from '../services/GalleryService';

const rootReducer = combineReducers({
  [galleryApi.reducerPath]: galleryApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(galleryApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

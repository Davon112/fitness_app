import { configureStore } from '@reduxjs/toolkit';
import exerciseSliceReducer from './features/exerciseSlice'

export const store = configureStore({
  reducer: {
    exercises: exerciseSliceReducer,
  },
});
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    //exercises.exercises
  exercises: [],
  // exercises.totalExercises
  totalExercises: 0,
};



export const exerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload);

      const exercise = action.payload;

      const existingExercise = state.exercises.find((workout) => workout.id === exercise.id);

      if (!existingExercise) {
        const newState = [...state.exercises, exercise];
        state.exercises = newState;
        state.totalExercises = state.exercises.length;
        console.log(state.exercises)
      }

    },
    deleteExercise: (state, action) => {
        const id = action.payload;
        const newState = state.exercises.filter((ex) => ex.id !== id)
        state.exercises = newState;
        state.totalExercises = state.exercises.length;
    },
  },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
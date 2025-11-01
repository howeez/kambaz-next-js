// app/Enrollments/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define enrollment type
interface Enrollment {
  user: string;   // user._id
  course: string; // course.number
}

// Initial state (empty array, can be prepopulated if needed)
const initialState: Enrollment[] = [];

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, action: PayloadAction<Enrollment>) => {
      const exists = state.some(
        (e) => e.user === action.payload.user && e.course === action.payload.course
      );
      if (!exists) state.push(action.payload);
    },
    removeEnrollment: (state, action: PayloadAction<Enrollment>) => {
      return state.filter(
        (e) => !(e.user === action.payload.user && e.course === action.payload.course)
      );
    },
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      return action.payload; // replace entire enrollments list
    },
  },
});

export const { addEnrollment, removeEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

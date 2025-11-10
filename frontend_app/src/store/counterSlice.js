/**
 * Counter slice using Redux Toolkit to demonstrate basic reducer logic.
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // PUBLIC_INTERFACE
    increment(state) {
      /** Increase counter by 1 */
      state.value += 1;
    },
    // PUBLIC_INTERFACE
    decrement(state) {
      /** Decrease counter by 1 */
      state.value -= 1;
    },
    // PUBLIC_INTERFACE
    incrementByAmount(state, action) {
      /** Increase counter by a provided numeric payload */
      const amt = Number(action.payload) || 0;
      state.value += amt;
    },
    // PUBLIC_INTERFACE
    reset(state) {
      /** Reset counter to zero */
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;

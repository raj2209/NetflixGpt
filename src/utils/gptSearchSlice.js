import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearchComponent: false
  },
  reducers: {
    changeGptSearchComponentVisibility: (state) => {
      state.showGptSearchComponent = !state.showGptSearchComponent;
    },
  },
});

export const { changeGptSearchComponentVisibility } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;

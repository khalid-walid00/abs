
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    sideBar: true,
  };
  
const toggleSlice = createSlice({
  name: 'Toggle',
  initialState,
  reducers: {
    SideBar(state, action) {
      state.sideBar = action.payload;
    },
//     ToggleModel(state, action) {
//       state.openModel = action.payload;
//     },
//     OpenAddModel(state, action) {
//       state.openAddModel = action.payload;
//   }
}
});

export const { SideBar} = toggleSlice.actions;
export const toggleSliceReducer = toggleSlice.reducer;

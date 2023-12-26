import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions(state, action) {
      state.missions = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMissions, setLoading, setError } = missionsSlice.actions;
export default missionsSlice.reducer;
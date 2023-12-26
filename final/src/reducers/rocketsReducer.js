import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets(state, action) {
      state.rockets = action.payload;
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

export const { setRockets, setLoading, setError } = rocketsSlice.actions;
export default rocketsSlice.reducer;
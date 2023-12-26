import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './reducers/rocketsReducer';
import missionsReducer from './reducers/missionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer
  }
});

export default store;

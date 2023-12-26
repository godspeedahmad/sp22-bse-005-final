import { setRockets, setLoading, setError } from '../reducers/rocketsReducer';

export const fetchRockets = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    if (!response.ok) {
      throw new Error('Failed to fetch rockets');
    }
    const data = await response.json();
    dispatch(setRockets(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

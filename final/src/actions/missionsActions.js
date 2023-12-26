import { setMissions, setLoading, setError } from '../reducers/missionsReducer';

export const fetchMissions = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    if (!response.ok) {
      throw new Error('Failed to fetch missions');
    }
    const data = await response.json();
    dispatch(setMissions(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
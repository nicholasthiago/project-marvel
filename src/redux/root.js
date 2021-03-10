import { combineReducers } from 'redux';

// --- Reducers Added to Main Reducer ------------------------- //
import marvelReducer from 'redux/marvel/marvel.reducer';

export default combineReducers({
	marvel: marvelReducer,
});
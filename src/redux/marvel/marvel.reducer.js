import { marvelTypes } from './marvel.types';
import * as utils from './marvel.utils';


const INITIAL_STATE = {

	data_get		: []	,
	
	data_filter		: ''	,
	data_select		: []	,

	data_datetime	: ''	,
};


const marvelReducer = ( state = INITIAL_STATE, action ) => {

	switch (action.type) {

		case marvelTypes.SET_DATA:
			return {
				...state,
				data_get: 		utils.SetData(state.data_get,action.payload),
				data_loaded: 	true,
				data_datetime: 	utils.SetDateTime(state.data_get),
			};

		case marvelTypes.SET_DATETIME:
			return {
				...state,
				data_datetime: utils.SetDateTime(state.data_get,action.payload),
			};

		case marvelTypes.SET_SELECT:
			return {
				...state,
				data_select: utils.SetData(state.data_select,action.payload),
			};

		case marvelTypes.SET_FILTER:
			return {
				...state,
				data_filter: utils.SetData(state.data_filter,action.payload),
			};

		default: return { ...state };
	};
};

export default ( marvelReducer );
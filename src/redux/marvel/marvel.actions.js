import { marvelTypes } from './marvel.types';

export const SetData = (Data) => ({
	type: marvelTypes.SET_DATA,
	payload: Data,
});

export const FilterData = (Data) => ({
	type: marvelTypes.SET_FILTER,
	payload: Data,
});

export const SelectData = (Data) => ({
	type: marvelTypes.SET_SELECT,
	payload: Data,
});

export const SetDateTime = (Time) => ({
	type: marvelTypes.SET_DATETIME,
	payload: Time,
});
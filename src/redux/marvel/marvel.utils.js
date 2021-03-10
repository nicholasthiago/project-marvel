export function SetData (state,data,r) {
	r = data
	return r;
};

export function SetDateTime (state,date,d) {
	d = new Date().getTime();

	return d;
};
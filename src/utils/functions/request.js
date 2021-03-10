
// ---- Request Functions - Configured ------------------------ //

export async function requestDefault (type,limit,data,url) {

	let key 	= '25a3bb2f8afc30942f44388024a33246'			;
	let hash 	= 'ffd275c5130566a2916217b101f26150'			;
	let base 	= 'https://gateway.marvel.com:443/v1/public/'	;

	url = `${base}${type}?orderBy=-modified&limit=${limit}&apikey=${key}&hash=${hash}`;

	await fetch(url)
		.then( response => response.json() )
		.then( response => data = response.data.results )
		.catch( error 	=> console.error(error.message) )

	return data;
};
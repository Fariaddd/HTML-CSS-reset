const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const productID = params.get('id');
const
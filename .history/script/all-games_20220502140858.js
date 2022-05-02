const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const productID = params.get('id');
const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products/';
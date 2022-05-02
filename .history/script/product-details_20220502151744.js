const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("id"));
const productID = params.get("id");
const APIUrl = `https://successful-wing.flywheelsites.com/wp-json/wc/store/products/${productID}`;
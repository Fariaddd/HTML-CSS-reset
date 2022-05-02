const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("id"));
const productID = params.get("id");
const APIUrl = `https://successful-wing.flywheelsites.com/wp-json/wc/store/products/${productID}`;

async function getDetails() {
    try {
        const response = await fetch(APIUrl);
        // console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const gameDescription = responseJSON.Description





    } catch (error) {
        console.log(error)
    }
}

getDetails();
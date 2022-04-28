successful - wing.flywheelsites.com

const url = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'

async function getProducts(url) {
    const response = await fetch(url);
    const products = response.json();
    console.log("products");
}


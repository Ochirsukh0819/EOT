const search_value = window.location.search;
console.log("Utga: ", search_value);

const urlParams = new URLSearchParams(search_value);

const value = urlParams.get("category");



if(value == "sides"){
    window.location.href = 'product_nemelt.html';
}
else if(value == "deals" ) {
    window.location.href = 'product_bagts.html';
}

else if(value == "pizzas"){
     window.location.href = 'product_pizza.html';
}
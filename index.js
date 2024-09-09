import {fetchData} from './modules/network.js';
import {nav,title,footer,productsFetch,card} from './modules/ui.js';


const bodyElement = document.querySelector('body');
bodyElement.innerHTML = `${nav}
                         ${title}
                         ${productsFetch}
                         ${card}
                         ${footer}`;

/* -------------------------fetch and clear button --------------------------------------- */
const fetchButton = document.querySelector('#fetch');
const clearButton = document.querySelector('#clear');
const productContainer = document.querySelector('#product-container');

// Function to handle fetch data
const handleFetch = async () => {
    await fetchData();
    clearButton.classList.remove('hidden'); 
};

// Function to handle clear data
const handleClear = () => {
    productContainer.innerHTML = ''; 
    clearButton.classList.add('hidden'); 
};

// Add event listeners to buttons
fetchButton.addEventListener('click', handleFetch);
clearButton.addEventListener('click', handleClear);
/* --------------------------------------------------------------------------------------- */
const homeButton = document.querySelector('#homeButton');
const cartButton = document.querySelector('#CartButton');
// Navigation buttons
homeButton.addEventListener('click', () => {
    window.location.href = 'index.html'; 
});

cartButton.addEventListener('click', () => {
    window.location.href = 'cart.html'; 
});
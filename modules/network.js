

async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayProducts(products) {
    const container = document.querySelector('#product-container');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add(
            'p-4',
            'w-[250px]',
            'bg-white',
            'border',
            'border-gray-300',
            'rounded-lg',
            'shadow-lg',
            'overflow-hidden',
            'flex',
            'items-center',
            'justify-between',
            'flex-col',
            'mb-4',
        );

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.classList.add('w-[250px]', 'h-[250px]', 'mb-2','object-cover');

        const title = document.createElement('h2');
        title.textContent = product.title;
        title.classList.add('text-lg', 'font-bold', 'mb-2');

        const category = document.createElement('p');
        category.textContent = `Category: ${product.category}`;
        category.classList.add('text-gray-600', 'mb-2');

        const description = document.createElement('p');
        description.textContent = product.description;
        description.classList.add('text-gray-700', 'text-sm', 'mb-2');
        description.style.maxHeight = '60px';
        description.style.overflow = 'hidden';
        description.style.textOverflow = 'ellipsis';

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;
        price.classList.add('text-gray-800', 'font-bold', 'mb-2');

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
        rating.classList.add('text-yellow-600', 'text-sm');
/* --------------------------------------------------- */
//add cart button
const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add(
            'px-4',
            'py-2',
            'bg-blue-500',
            'text-white',
            'rounded',
            'hover:bg-blue-600',
            'mt-2'
        ); 
        /* addToCartButton.addEventListener('click', () => addToCart(product)); */
/* --------------------------------------------------- */

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(addToCartButton);
        

        container.appendChild(card);
    });
}

export { fetchData, displayProducts };




/* ---------------------------------------------------------------- */

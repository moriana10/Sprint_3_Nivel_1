// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
const products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

let cartList = [];
let cart = [];
let total = 0;

// Exercise 1
// 1. Hem de recòrrer l'array products per agafar el producte per la seva id
// 2. Quan la trobem afegim el producte a l'array cartList
function buy(id) {
    for (let product of products) {
        if (product.id === id) {
            cartList.push(product);
        }       
    }  
}

// Exercise 2
//  la funció cleanCart() reinicialitza la variable cartList.
function cleanCart() {
    cartList = [];
}

// Exercise 3
// Calculem l'import total del cart (totalAmount)
function calculateTotal() {
    let totalAmount = 0;
    for (let product of cartList) {
        let priceProduct = product.price;
        totalAmount += priceProduct;
    }
    return totalAmount;
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
function generateCart(cartList) {
    cart = [];
    for (let product of cartList) {
        let repeated = false;
        for (let productCart of cart) {
            if (productCart.id === product.id) {
                repeated = true;
                productCart.quantity++;
                product.subtotal = product.quantity * product.price;
            }
        }
        if (repeated === false) {
            product.quantity = 1; //En cas que no existeixi, l'afegim a l'array cart (compte, que no se t'oblidi agregar la propietat quantity amb valor 1 al producte abans de fer push).
            cart.push(product);
            product.subtotal = product.quantity * product.price;
        }
    }
    return cart;
}

// Exercise 5
// Apply promotions to each item in the array "cart". Les id que tenen descompte son 1(el preu baixa a 10) i 3(2/3 de descompte)
function applyPromotionsCart(cart) {
    for (let product of cart) {
        if (product.id === 1 && product.quantity > 2) {
            product.subtotalWithDiscount = product.quantity * 10;
        } else if (product.id === 3 && product.quantity >= 10) {
            let discount = ((product.subtotal * 2) / 3).toFixed(2); // fixem els decimals en 2
            product.subtotalWithDiscount = discount;
        }
    }
    return cart;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


function open_modal(){
	console.log("Open Modal");
}
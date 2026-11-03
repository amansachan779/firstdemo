const products = [
    // 📱 MOBILES
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobiles",
        price: 59999,
        oldPrice: 69999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Mobiles",
        price: 49999,
        oldPrice: 59999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500"
    },
    {
        id: 3,
        name: "OnePlus 12",
        category: "Mobiles",
        price: 54999,
        oldPrice: 64999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592286927505-2fdc4e7c1c7b?w=500"
    },
    {
        id: 4,
        name: "Google Pixel 8",
        category: "Mobiles",
        price: 42999,
        oldPrice: 49999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
    },
    {
        id: 5,
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 15999,
        oldPrice: 19999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 6,
        name: "Motorola Edge 50",
        category: "Mobiles",
        price: 29999,
        oldPrice: 34999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500"
    },

    // 💻 ELECTRONICS
    {
        id: 7,
        name: "MacBook Air",
        category: "Electronics",
        price: 89999,
        oldPrice: 99999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },
    {
        id: 8,
        name: "Gaming Laptop",
        category: "Electronics",
        price: 54999,
        oldPrice: 69999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 9,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1999,
        oldPrice: 2999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 10,
        name: "Smart Watch",
        category: "Electronics",
        price: 2499,
        oldPrice: 3999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1499,
        oldPrice: 2499,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    },

    // 👕 FASHION
    {
        id: 12,
        name: "Men's Casual Shirt",
        category: "Fashion",
        price: 799,
        oldPrice: 1299,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
    },
    {
        id: 13,
        name: "Men's Sneakers",
        category: "Fashion",
        price: 1499,
        oldPrice: 2499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 14,
        name: "Women's Handbag",
        category: "Fashion",
        price: 1299,
        oldPrice: 1999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },
    {
        id: 15,
        name: "Classic Sunglasses",
        category: "Fashion",
        price: 599,
        oldPrice: 999,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },

    // 🏠 HOME
    {
        id: 16,
        name: "Modern Table Lamp",
        category: "Home",
        price: 899,
        oldPrice: 1499,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
    },
    {
        id: 17,
        name: "Comfortable Sofa",
        category: "Home",
        price: 15999,
        oldPrice: 19999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
        id: 18,
        name: "Decorative Plant",
        category: "Home",
        price: 499,
        oldPrice: 799,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
    },

    // 📚 BOOKS
    {
        id: 19,
        name: "The Psychology of Money",
        category: "Books",
        price: 399,
        oldPrice: 599,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
    },
    {
        id: 20,
        name: "Programming Fundamentals",
        category: "Books",
        price: 599,
        oldPrice: 899,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500"
    },
    {
        id: 21,
        name: "Atomic Habits",
        category: "Books",
        price: 499,
        oldPrice: 699,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
    }
];


let cart = [];

const productContainer = document.getElementById("productContainer");


// DISPLAY PRODUCTS
function displayProducts(list) {

    productContainer.innerHTML = "";

    if (list.length === 0) {
        productContainer.innerHTML = `
            <div class="no-products">
                <h3>No products found 😕</h3>
                <p>Try another category or search.</p>
            </div>
        `;
        return;
    }

    list.forEach(product => {

        const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
        );

        productContainer.innerHTML += `
            <div class="product">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>
                </div>

                <p class="discount">${discount}% off</p>

                <button class="add-btn"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

                <button class="buy-btn"
                    onclick="buyNow(${product.id})">
                    Buy Now
                </button>

            </div>
        `;
    });
}


// CATEGORY FILTER
function filterProducts(category) {

    if (category === "All") {
        displayProducts(products);
        return;
    }

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);
}


// SEARCH
function searchProducts() {

    const searchInput = document.getElementById("searchInput");

    const search = searchInput.value.toLowerCase().trim();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );

    displayProducts(filtered);
}


// SEARCH WHILE TYPING
document.getElementById("searchInput").addEventListener("input", searchProducts);


// ADD TO CART
function addToCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    cart.push(product);

    updateCart();

    alert(product.name + " added to cart! 🛒");
}


// UPDATE CART
function updateCart() {

    document.getElementById("cartCount").innerText = cart.length;

    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${product.image}" alt="${product.name}">

                <div>
                    <h4>${product.name}</h4>

                    <p>
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <button class="remove-btn"
                        onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    document.getElementById("cartTotal").innerText =
        total.toLocaleString("en-IN");
}


// REMOVE FROM CART
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// OPEN CART
function openCart() {

    document.getElementById("cartPanel")
        .classList.add("active");

    document.getElementById("overlay")
        .classList.add("active");
}


// CLOSE CART
function closeCart() {

    document.getElementById("cartPanel")
        .classList.remove("active");

    document.getElementById("overlay")
        .classList.remove("active");
}


// SHOP NOW
function scrollToProducts() {

    document.querySelector("main")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// BUY NOW
function buyNow(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    alert(
        "🛍️ Demo Checkout\n\n" +
        product.name +
        "\nPrice: ₹" +
        product.price.toLocaleString("en-IN")
    );
}


// CHECKOUT
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert("🎉 Demo Order Placed Successfully!");

    cart = [];

    updateCart();

    closeCart();
}


// SHOW ALL PRODUCTS INITIALLY
displayProducts(products);
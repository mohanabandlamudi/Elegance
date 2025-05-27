// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animation for button
        button.textContent = 'Added!';
        button.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#c8a97e';
        }, 2000);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search Functionality
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar';
    searchBar.innerHTML = `
        <input type="text" placeholder="Search for jewelry...">
        <button class="search-button"><i class="fas fa-search"></i></button>
    `;
    
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(searchBar);
    
    const searchInput = searchBar.querySelector('input');
    searchInput.focus();
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // Implement search functionality here
            console.log('Searching for:', searchInput.value);
        }
    });
    
    // Close search bar when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && e.target !== searchIcon) {
            searchBar.remove();
        }
    });
});

// Product Image Hover Effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    const img = card.querySelector('img');
    card.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Scroll to Top Button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add some CSS for the scroll-to-top button
const style = document.createElement('style');
style.textContent = `
    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #c8a97e;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: background-color 0.3s ease;
    }
    
    .scroll-top:hover {
        background-color: #b69468;
    }
    
    .search-bar {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
    
    .search-bar input {
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 3px;
        width: 200px;
    }
    
    .search-button {
        background: #c8a97e;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
    }
    
    .search-button:hover {
        background: #b69468;
    }
`;
document.head.appendChild(style); 

// Getting the elements
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
const closeBtn = document.querySelector('.close');
const cart = document.querySelector('.cart');

// Added event listeners for plus and minus buttons
plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quantityElement = button.parentElement.querySelector('#quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    });
});

minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quantityElement = button.parentElement.querySelector('#quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });
});


closeBtn.addEventListener('click', () => {
    cart.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
        cart.style.display = 'none';
    }, 300);
});

   
   
   
   const checkoutBtn = document.querySelector('.checkOut');
    checkoutBtn.addEventListener('click', () => {
     window.location.href = 'https://pay.google.com'; 
    });
    
    const closeButtn = document.querySelector('.close');
const carrt = document.querySelector('.cart');

closeBtn.addEventListener('click', () => {
    cart.style.animation = 'slideOutRight 0.5s forwards';
});


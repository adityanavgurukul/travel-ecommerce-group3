
    const checkoutBtn = document.querySelector('.checkOut');
    checkoutBtn.addEventListener('click', () => {
     window.location.href = 'https://pay.google.com'; 
    });
    
    const closeBtn = document.querySelector('.close');
const cart = document.querySelector('.cart');

closeBtn.addEventListener('click', () => {
    cart.style.animation = 'slideOutRight 0.5s forwards';
});


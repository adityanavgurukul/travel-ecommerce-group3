
document.addEventListener('DOMContentLoaded', function () {
    const quantities = document.querySelectorAll('.quantity');

    quantities.forEach((quantity) => {
        let count = parseInt(quantity.querySelector('.count').innerText);

        const plusBtn = quantity.querySelector('.plus');
        const minusBtn = quantity.querySelector('.minus');
        const countSpan = quantity.querySelector('.count');

        plusBtn.addEventListener('click', () => {
            count++;
            countSpan.innerText = count;
        });

        minusBtn.addEventListener('click', () => {
            if (count > 1) {
                count--;
                countSpan.innerText = count;
            }
        });
    });

 

    const checkoutBtn = document.querySelector('.checkOut');
    checkoutBtn.addEventListener('click', () => {
     window.location.href = 'https://pay.google.com'; 
    });
});

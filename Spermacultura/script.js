const buttons = document.querySelectorAll('.ripple-button');
buttons.forEach(button => { button.addEventListener('click', function(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    // Imposta posizione e inserisce nel DOM
    ripple.style.left = `${x - 50}px`; // -50 per centrare l'effetto (100px/2)
    ripple.style.top = `${y - 50}px`;
    button.appendChild(ripple);

    // Rimuove dopo l'animazione
    setTimeout(() => {
        ripple.remove();
    }, 600);
    });
});
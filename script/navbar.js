document.addEventListener('DOMContentLoaded', function() {
    var navbarBtn = document.querySelector('.navbarBtn');
    var hamburgerBtn = document.getElementById('hamburgerBtn');

    hamburgerBtn.addEventListener('click', function() {
        navbarBtn.style.display = (window.getComputedStyle(navbarBtn).display === 'flex') ? 'none' : 'flex';
    });

    window.addEventListener('resize', function() {
        // Display navbarBtn as flex only if the hamburger button is currently visible
        if (window.innerWidth > 960 ) {
            navbarBtn.style.display = 'flex';
        }else { 
            navbarBtn.style.display = 'none';
        }
    });
});

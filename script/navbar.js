document.getElementById('hamburgerBtn').addEventListener('click', function() {
    var navbarBtn = document.querySelector('.navbarBtn');
    navbarBtn.style.display = (navbarBtn.style.display === 'flex') ? 'none' : 'flex';
});

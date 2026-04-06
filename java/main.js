<script>
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(window.scrollY > 50) { nav.style.background = 'rgba(26,18,8,0.98)'; }
    else { nav.style.background = 'rgba(26,18,8,0.95)'; }
  });

  // Favorite toggle
  document.querySelectorAll('.hall-fav').forEach(btn => {
    btn.addEventListener('click', function() {
      const icon = this.querySelector('i');
      if(icon.classList.contains('far')) {
        icon.classList.replace('far','fas');
        this.style.color = '#e74c3c';
      } else {
        icon.classList.replace('fas','far');
        this.style.color = '#ccc';
      }
    });
  });
</script>   
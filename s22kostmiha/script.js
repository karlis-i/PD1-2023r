
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = document.querySelector('header').offsetHeight;

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const isHeaderRelative = window.innerWidth <= 960;
        const headerHeight = isHeaderRelative? 0 :  document.querySelector('header').offsetHeight;
        const offsetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('.subject-card').forEach(card => {
      const btn = card.querySelector('.chev');
      const body = card.querySelector('.subject-body');
      if (!btn || !body) return;

      const navButtons = document.querySelectorAll(".nav .nav-item");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
   
    navButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
  });
});
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          
          body.style.display = 'none';
          btn.setAttribute('aria-expanded', 'false');
          btn.style.transform = 'rotate(180deg)';
          btn.textContent = '>';
        } else {
          body.style.display = 'block';
          btn.setAttribute('aria-expanded', 'true');
          btn.style.transform = 'rotate(0deg)';
          btn.textContent = '⌃';
        }
      });
    });
  });
  
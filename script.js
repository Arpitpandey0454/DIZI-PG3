document.addEventListener('DOMContentLoaded', function () {
    // Toggle subject sections
    document.querySelectorAll('.subject-card').forEach(card => {
      const btn = card.querySelector('.chev');
      const body = card.querySelector('.subject-body');
      if (!btn || !body) return;

      const navButtons = document.querySelectorAll(".nav .nav-item");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    navButtons.forEach(btn => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
  });
});

  
      // start expanded
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          // collapse
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
  
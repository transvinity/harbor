// Minimal JS for future expansion (e.g., search, filtering)
// Currently, no dynamic functionality is implemented.

// Example: Highlight category on click (future feature)
document.querySelectorAll('.category h2').forEach(h2 => {
  h2.addEventListener('click', () => {
    h2.parentElement.classList.toggle('active');
  });
});

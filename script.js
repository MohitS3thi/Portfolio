const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
 
const revealItems = document.querySelectorAll(".reveal");
 
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.2 }
);
 
revealItems.forEach((item, idx) => {
  item.style.transitionDelay = `${idx * 70}ms`;
  observer.observe(item);
});
 
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  navToggle.classList.contains('open')
    ? navToggle.classList.remove('open')
    : navToggle.classList.add('open');
});

// const counters = document.querySelectorAll('.count');

// window.addEventListener('scroll', () => {
//   counters.forEach((counter) => {
//     const rect = counter.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (rect.top < windowHeight) {
//       counter.style.animationPlayState = 'running';
//       counter.classList.add('counting');
//     }
//   });
// });

// * Working Code

// const counters = document.querySelectorAll('.count');

// const options = {
//   threshold: 1,
//   rootMargin: '0px',
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const target = entry.target;
//       const targetCount = parseInt(target.getAttribute('data-count'));
//       let count = 0;

//       const increment = Math.ceil(targetCount / 100); // Adjust the speed of counting

//       const updateCount = () => {
//         target.textContent = count;
//         count += increment;
//         if (count <= targetCount) {
//           requestAnimationFrame(updateCount);
//         } else {
//           target.textContent = targetCount;
//         }
//       };

//       requestAnimationFrame(updateCount);

//       observer.unobserve(target);
//     }
//   });
// }, options);

// counters.forEach((counter) => {
//   observer.observe(counter);
// });

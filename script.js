$(document).ready(function () {


  console.log("start")

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
})

const about = document.querySelectorAll(".hidden")

about.forEach((el) => observer.observe(el));

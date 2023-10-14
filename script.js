$(document).ready(function () {


  console.log("start")

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
})

// check if about page is in view and change hidden class to show
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

const helloworldAppear = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('hello-world-sentence-visible')

    }
  })
})


// look for hello world div
const helloWorld = document.querySelector(".hello-world-sentence")
console.log(helloWorld);
helloworldAppear.observe(helloWorld);


// setTimeout(function () {
//   // find the div we want to add everything to
//   const helloWorld = document.querySelector(".hello-world-sentence")
//   //write the string for the middle
//   const sentence = "and welcome to my"
//   // turn the string into an array
//   const sentenceArray = sentence.split("")
//   // then write a loop that is time based
//   console.log(sentenceArray);

//   const addLetters = sentenceArray.forEach(letter => {
//     const letters = helloWorld.innerHTML
//     console.log(letters);
//     const addLetters = helloWorld.innerHTML = letters + letter
//     setTimeout(addLetters, 2000);
//   });
//   // we need a counter that is where we are in the string/array
//   // we need a time for each loop to wait or start
//   //in the loop we need to add or completely rewrite the innerhtml of new div
//   // end the loop
// }, 1500);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

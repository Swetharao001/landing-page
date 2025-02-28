document.addEventListener("DOMContentLoaded", function () {
  //-----------------Testimonial Slider
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    console.log("Showing slide", currentSlide);
    showSlide(currentSlide);
  }
  
  // ------------Initialize the slider and set interval for auto sliding
  showSlide(currentSlide);
  setInterval(nextSlide, 2000); 
});

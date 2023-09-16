const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
  slides[currentSlide].style.display = "none";
  slides[index].style.display = "block";
  $(".slide").hide(); // أخفي جميع الشرائح
  $(".slide").eq(index).fadeIn(100); // عرض الشريحة المحددة بانتقال

  currentSlide = index;
}

function nextSlide() {
  const newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Show the first slide initially
showSlide(0);

// Start automatic slide change
startAutoSlide();

// Change slide every 3 seconds
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  // startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  const newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
  startAutoSlide();
});



function openPage(pageUrl) {
  window.location.href = pageUrl;
}
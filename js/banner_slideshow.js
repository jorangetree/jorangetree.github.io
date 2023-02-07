const frequency = 10000;
let timeoutId;
let slideIndex = 0;
showSlides();

function nextSlide() {
    clearTimeout(timeoutId);
    slideIndex++;
    showSlides();
}

function prevSlide() {
    clearTimeout(timeoutId);
    slideIndex--;
    showSlides();
}

function moveToSlide(index) {
    clearTimeout(timeoutId);
    slideIndex = index;
    showSlides();
}

function getDotStyle(is_active) {
    if (is_active == true) {
        return "slideshow_dot cursor-pointer m-2 w-4 h-4 hover:bg-yellow-600 bg-green rounded-full";
    }
    return "slideshow_dot cursor-pointer m-2 w-4 h-4 hover:bg-yellow-600 bg-green-300 rounded-full";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner_entry");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slides.length > 0) {
    if (slideIndex >= slides.length || slideIndex < 0) {slideIndex = 0}
    slides[slideIndex].style.display = "block";
    timeoutId = setTimeout(function () { slideIndex++; showSlides(); }, frequency);
  }
}
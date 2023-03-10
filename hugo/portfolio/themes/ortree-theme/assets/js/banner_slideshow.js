const frequency = 5000;
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

function showSlides() {
  let slideShow = document.getElementById("slideshow");
  if (slideShow.offsetWidth > 640) {
    let i;
    let slides = document.getElementsByClassName("banner_entry");

    if (slideIndex >= slides.length || slideIndex < 0) {slideIndex = 0}
    for (i = 0; i < slides.length; i++) {
      if (i == slideIndex) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
    timeoutId = setTimeout(function () { slideIndex++; showSlides(); }, frequency);
  } else {
    let i;
    let slides = document.getElementsByClassName("banner_entry");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
    timeoutId = setTimeout(showSlides, 100);
  }
}
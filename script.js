const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const liveTime = document.getElementById("live-time");

// Testimonial slider
const testimonialSlides = document.querySelectorAll(".testimonial");
let currentTestimonialSlide = 0;

// Galeri
const galleryContainer = document.querySelector(".gallery-container");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let currentSlide = 0;
const slideWidth = document.querySelector(".gallery-slider").clientWidth;

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Update live time for Jakarta timezone
function updateLiveTime() {
  const jakartaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  liveTime.textContent = `Jakarta: ${jakartaTime}`;
}

// Refresh time every second
setInterval(updateLiveTime, 1000);
updateLiveTime();

// Testimonial Slider Controls
function showTestimonial(direction) {
  testimonialSlides[currentTestimonialSlide].classList.remove("active");
  currentTestimonialSlide =
    (currentTestimonialSlide + direction + testimonialSlides.length) %
    testimonialSlides.length;
  testimonialSlides[currentTestimonialSlide].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => {
  showTestimonial(-1);
});
document.querySelector(".next").addEventListener("click", () => {
  showTestimonial(1);
});

// Gallery Slider Controls
// function updateGalleryPosition() {
//   galleryContainer.style.transform = `translateX(-${
//     currentGallerySlide * slideWidth
//   }px)`;
//   galleryContainer.style.transition = "transform 0.4s ease-in-out";
// }

// galleryRightButton.addEventListener("click", () => {
//   currentGallerySlide++;
//   if (currentGallerySlide >= galleryItems.length) {
//     currentGallerySlide = 0; // Loop back to the first slide
//   }
//   updateGalleryPosition();
// });

// galleryLeftButton.addEventListener("click", () => {
//   currentGallerySlide--;
//   if (currentGallerySlide < 0) {
//     currentGallerySlide = galleryItems.length - 1; // Loop to the last slide
//   }
//   updateGalleryPosition();
// });

rightButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= galleryContainer.children.length) {
    currentSlide = 0; // Loop back to the first slide
  }
  updateGalleryPosition();
});

leftButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = galleryContainer.children.length - 1; // Loop to the last slide
  }
  updateGalleryPosition();
});

function updateGalleryPosition() {
  galleryContainer.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
}

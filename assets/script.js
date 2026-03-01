document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

});

const bioToggle = document.getElementById("bioToggle");
const fullBio = document.getElementById("fullBio");

if (bioToggle) {
  bioToggle.addEventListener("click", function (e) {
    e.preventDefault();

    if (fullBio.style.display === "block") {
      fullBio.style.display = "none";
      bioToggle.textContent = "Read Full Bio";
    } else {
      fullBio.style.display = "block";
      bioToggle.textContent = "Hide Full Bio";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {

  window.switchAudio = function(button, trackType) {

    const card = button.closest('.comparison-card');
    const audio = card.querySelector('audio');
    const source = audio.querySelector('source');
    const buttons = card.querySelectorAll('.toggle-buttons button');

    const beforeTrack = card.getAttribute("data-before");
    const afterTrack = card.getAttribute("data-after");

    const currentTime = audio.currentTime;

    if (trackType === "before") {
      source.src = beforeTrack;
    } else {
      source.src = afterTrack;
    }

    audio.load();
    audio.currentTime = currentTime;
    audio.play();

    // Remove active state from both buttons
    buttons.forEach(btn => btn.classList.remove("active-toggle"));

    // Add active state to clicked button
    button.classList.add("active-toggle");
  };

});

// FAQ Toggle
document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });

});
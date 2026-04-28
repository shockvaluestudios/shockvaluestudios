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

});
// Playlist tracks
const tracks = [
  {
    title: "Las Joyas Del Rock",
    src: "https://raw.githubusercontent.com/shockvaluestudios/cielosaudiofiles/main/00_joyas.mp3"
  },
  {
    title: "Superhero Sonideros",
    src: "https://raw.githubusercontent.com/shockvaluestudios/cielosaudiofiles/main/01.%20Intro%20-%20Cielos%20Vol.4%20Superhero%20Sonideros.mp3"
  },
  {
    title: "Puras Romanticas",
    src: "https://raw.githubusercontent.com/shockvaluestudios/cielosaudiofiles/main/puras_Romanticas.mp3"
  }
];

let currentTrack = 0;

window.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("audioPlayer");
  const title = document.getElementById("trackTitle");
  const list = document.getElementById("playlistList");


  if (!audio || !title || !list) return; // prevents errors on other pages

  function loadTrack(index) {
    audio.src = tracks[index].src;
    title.textContent = tracks[index].title;

    document.querySelectorAll(".playlist-list li").forEach((li, i) => {
      li.classList.toggle("active", i === index);
    });
  }

  function playPause() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
  }

  // Build playlist UI
  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.title;
    li.onclick = () => {
      currentTrack = index;
      loadTrack(currentTrack);
      audio.play();
    };
    list.appendChild(li);
  });

  // expose controls globally (for buttons)
  window.playPause = playPause;
  window.nextTrack = nextTrack;
  window.prevTrack = prevTrack;

  loadTrack(currentTrack);
});

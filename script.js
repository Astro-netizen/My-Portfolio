AOS.init({
  duration: 1000,
  once: true
});
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    icon.textContent = "☀️";
  } else {
    icon.textContent = "🌙";
  }
}
function openModal(card) {
  const modal = document.getElementById('achievementModal');
  const title = card.getAttribute('data-title');
  const description = card.getAttribute('data-description');
  const imagesData = card.getAttribute('data-images');
  const videoSrc = card.getAttribute('data-video');

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;

  // Handle multiple images
  const imageContainer = document.getElementById('modal-images');
  imageContainer.innerHTML = ''; // Clear old images

  if (imagesData) {
    try {
      const images = JSON.parse(imagesData);
      images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = title;
        img.style.width = "100%";
        img.style.margin = "10px 0";
        imageContainer.appendChild(img);
      });
    } catch (e) {
      console.error("Invalid image data:", e);
    }
  }

  // Handle video
  const video = document.getElementById('modal-video');
  const videoSource = document.getElementById('modal-video-source');
  if (videoSrc) {
    videoSource.src = videoSrc;
    video.load();
    video.style.display = "block";
  } else {
    videoSource.src = "";
    video.load();
    video.style.display = "none";
  }

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('achievementModal');
  modal.style.display = 'none';
}


// function closeModal() {
//   document.getElementById('achievementModal').style.display = 'none';
// }

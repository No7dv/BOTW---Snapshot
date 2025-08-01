// fade element scroll ------------
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal').forEach(function (r) {
  observer.observe(r);
});

//____________________
//--------------------
//____________________


// Fade video -------------
const video = document.getElementById('myVideo');

// Au chargement des métadonnées, on fait le fade-in
video.addEventListener('loadedmetadata', () => {
  video.classList.add('fade-in');
});

// Quand on arrive à la fin, on déclenche le fade-out
video.addEventListener('timeupdate', () => {
  const remaining = video.duration - video.currentTime;
  if (remaining <= 1 && !video.classList.contains('fade-out')) {
    video.classList.add('fade-out');
  }
});

video.addEventListener('ended', () => {
  video.classList.remove('fade-out');

  video.currentTime = 0;
  video.play();
});

//____________________
//--------------------
//____________________

// Carrousel ---------

window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carrousel-track');
  const images = Array.from(track.children);

  // Clone des images pour créer l'effet infini
  images.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });

  let scrollSpeed = .3; // pixels/frame
  let pos = 0;

  function animate() {
    pos -= scrollSpeed;
    if (Math.abs(pos) >= track.scrollWidth / 2) {
      pos = 0;
    }
    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

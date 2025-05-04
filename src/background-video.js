const video = document.getElementById("background-video");
let mouseMoveTimeout;

video.addEventListener("loadeddata", () => {
  video.pause();
});

// Reproduce el video cuando el mouse se mueve
document.body.addEventListener("mousemove", () => {
  if (video.paused) {
    video.play();
  }

  clearTimeout(mouseMoveTimeout);
  mouseMoveTimeout = setTimeout(() => {
    video.pause(); // Pausa el video si el mouse está quieto
  }, 200); // Pausa después de 2 segundos sin movimiento
});

// Pausa el video cuando el mouse sale del cuerpo
document.body.addEventListener("mouseleave", () => {
  video.pause();
  clearTimeout(mouseMoveTimeout);
});

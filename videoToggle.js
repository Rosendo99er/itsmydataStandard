export function toggleVideoContainer(consentGiven) {
    const videoContainer = document.getElementById('video-container');
    if (consentGiven) {
      videoContainer.style.display = 'none'; // Video-Container ausblenden
    } else {
      videoContainer.style.display = 'block'; // Video-Container wieder anzeigen
    }
  }

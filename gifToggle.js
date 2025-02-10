export function toggleGifContainer(consentGiven) {
  console.log("toggleGifContainer aufgerufen");
  const startGifContainer = document.getElementById('start-gif-container');

  if (!startGifContainer) {
      console.error("Der GIF-Container wurde nicht gefunden.");
      return;
  }

  if (consentGiven) {
      console.log("gif: consent given erkannt");
      startGifContainer.classList.remove('visible');
  } else {
      console.log("gif: consent NOT given erkannt");
      startGifContainer.classList.add('visible');
  }
}

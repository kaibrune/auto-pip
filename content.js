
document.addEventListener('visibilitychange', () => {
  let video = document.querySelector('video');
  if (video) {
    if (document.hidden) {
      if (document.pictureInPictureElement !== video) {
        video.requestPictureInPicture().catch(error => {
          if (error.name !== 'InvalidStateError') {
            console.error('Error entering:', error);
          }
        });
      }
    } else {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(error => {
          if (error.name !== 'InvalidStateError') {
            console.error('Error exiting:', error);
          }
        });
      }
    }
  }
});

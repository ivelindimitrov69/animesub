document.getElementById('video-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPlayer = document.getElementById('video-player');

    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        videoPlayer.play();
    }
});

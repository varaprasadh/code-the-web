console.log("hello world");
var srcVideo;
window.onload = function() {
    srcVideo = document.querySelector('.srcVideo');
    srcVideo.onload = (e => {
        srcVideo.play();
    });


    var targetCanvas = document.querySelector('.target');
    console.log(targetCanvas);
    var ctx = targetCanvas.getContext('2d');
    console.log(srcVideo);
    srcVideo.addEventListener('play', (e) => {
        w = srcVideo.clientWidth;
        h = srcVideo.videoHeight;
        targetCanvas.width = w;
        targetCanvas.height = h;
        //   ctx.drawImage(srcVideo, 0, 0, srcVideo.clientWidth, srcVideo.videoHeight);
        setInterval(() => {
            ctx.drawImage(srcVideo, 0, 0, srcVideo.clientWidth, srcVideo.videoHeight);
            var pixels = ctx.getImageData(0, 0, w, h);
            // console.log(pixels);
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "red";
            ctx.rect(0, 0, w, h);
            ctx.fill();
            var backgroundpixels = ctx.getImageData(0, 0, w, h);

            for (let i = 0; i < pixels.data.length / 4; i++) {
                let r = pixels.data[i * 4 + 0];
                let g = pixels.data[i * 4 + 1];
                let b = pixels.data[i * 4 + 2];
                if (g > 100 && r > 100 && b < 43) {
                    pixels.data[i * 4 + 0] = Math.random() * 255;
                    pixels.data[i * 4 + 1] = Math.random() * 255;
                    pixels.data[i * 4 + 2] = Math.random() * 255;
                }
            }
            ctx.putImageData(pixels, 0, 0);

        }, 1000 / 10);

    });


}
// CAPTURES A REGULAR IMAGE

window.onload = function () {

    const video = document.querySelector("#videoElement");
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    // const canvasWidth = canvas.width
    // const canvasHeight = canvas.height
    // let imageData;
    
    //Prompts the user for access tothe webcam, if granted then stream
    if(navigator.mediaDevices.getUserMedia){
        //getUserMedia returns a promise, takes constraint of an object
        navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
            video.srcObject = stream;
            video.play();
            mediaStream = stream;
        })
        .catch((err) => console.error(err)
        )};
    
        //Adding event listener for if there is  click on the screen, to save
        video.addEventListener('click', snapshot, false);
    
        function snapshot() {
            if(mediaStream){
                //Produce a captured image 
                context.drawImage(video, 0, 0, video.width, video.height);
                //Get the data of colour values of each pixel in the canvas for future development
                // imageData = context.getImageData(0, 0, canvasWidth, canvasHeight).data;
                // console.log(imageData)
            }
        }

    
    
    }
    
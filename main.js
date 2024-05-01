// Array of image paths
var imagePaths = [];

var currentIndex = 0;
var imgElement = document.createElement('img');
document.body.appendChild(imgElement);

// Function to load and display the next image
function loadNextImage() {
    // Set the source of the image
    for (let i = 1; i < 68; i++) {
    imagePaths[i] = [
        'images/img_'+i+'.jpg'
    ]

//console.log(i);

    imgElement.src = imagePaths[currentIndex];
    }
    // Increment currentIndex to load the next image
    currentIndex++;
    console.log(currentIndex + 'first')
    // If all images have been loaded, clear the interval
    if (currentIndex == imagePaths.length) {
    currentIndex = 1;
imgElement.src = imagePaths[currentIndex];
currentIndex++;
        clearInterval(intervalID);
        console.log(currentIndex);
    }
}

// Call loadNextImage to load and display the first image
loadNextImage();

// Call loadNextImage every second
var intervalID = setInterval(loadNextImage, 1200);

// Add an event listener to resume the image rotation when the mouse is released
document.addEventListener("mouseup", function() {
    //intervalID = setInterval(loadNextImage, 1200);
});

document.addEventListener("click", function() {
    
    var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]; // Example colors
    var randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = "linear-gradient(to bottom right, " + randomColor1 + ", " + randomColor2 + ")";

});

document.addEventListener("mousedown", function() {
    // intervalID = setInterval(loadNextImage, 1200);
      currentIndex=0;
            imgElement.style.zIndex = -4;
         console.log(img.zIndex)})
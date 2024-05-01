// Array of image paths
var imagePaths = [];

var currentIndex = 0;
var imgElement = document.createElement('img');
document.body.appendChild(imgElement);

// Function to load and display the next image
function loadNextImage() {
    // Set the source of the image
    for (let i = 0; i < 67; i++) {
    imagePaths[i] = [
        'images/img_'+i+'.jpg'
    ]
//console.log(i);
    imgElement.src = imagePaths[currentIndex];
    }
    // Increment currentIndex to load the next image
    currentIndex++;
    
    // If all images have been loaded, clear the interval
    if (currentIndex === imagePaths.length) {
        clearInterval(intervalID);
        console.log("All images loaded.");
    }
}

// Call loadNextImage to load and display the first image
loadNextImage();

// Call loadNextImage every second
var intervalID = setInterval(loadNextImage, 1200);


document.addEventListener("mousedown", function(event) {
  var container = document.getElementById("container");
  var gradient = document.createElement("div");
  gradient.classList.add("gradient");
  container.appendChild(gradient);
});

document.addEventListener("mouseup", function(event) {
  var container = document.getElementById("container");
  var gradients = container.querySelectorAll(".gradient");
  gradients.forEach(function(gradient) {
    container.removeChild(gradient);
  });
});


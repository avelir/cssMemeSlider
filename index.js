const slider = document.querySelector(".slider");
const controlButtons = document.querySelectorAll(".control-button");
const captionContainer = document.querySelector(".caption-container");
const captions = ["Meme 1", "Meme 2", "Meme 3", "Meme 4"]; // Add captions for each slide

// Initialize the current slide index
let currentSlideIndex = 0;

// Add a click event listener to each control button
controlButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Calculate the new slide index based on the button's data-slide-index attribute
    const newSlideIndex = parseInt(this.getAttribute("data-slide-index"));

    // If the clicked button is already active, do nothing
    if (newSlideIndex === currentSlideIndex) {
      return;
    }

    // Remove the 'active' class from the previously active button
    controlButtons[currentSlideIndex].classList.remove("active");

    // Add the 'active' class to the clicked button
    this.classList.add("active");

    // Calculate the translation value for the slider
    const translateValue = -newSlideIndex * 100 + "%";

    // Update the current slide index
    currentSlideIndex = newSlideIndex;

    // Update the slider's position with a smooth transition
    slider.style.transform = `translateX(${translateValue})`;

    // Update the caption container with a smooth transition
    captionContainer.style.opacity = 0;

    // Delay the opacity change to match the slider transition
    setTimeout(function () {
      captionContainer.style.opacity = 1;
      // Update the caption text
      captionContainer.querySelector(".current-caption").textContent =
        captions[currentSlideIndex];
    }, 300);
  });
});

// Initially, set the first control button as active
controlButtons[0].classList.add("active");

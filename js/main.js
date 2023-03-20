// Get all the draggable icons
const icons = document.querySelectorAll("#icon");
const Gear1 = document.querySelector('#icon');
const Gear2 = document.querySelector('#icon2');
const Gear3 = document.querySelector('#icon3');
const Gear4 = document.querySelector('#icon4');
const Gear5 = document.querySelector('#icon5');
const Gear6 = document.querySelector('#icon6');

// Get all the title elements
const boxes = document.querySelectorAll(".DragDropBox");
const Box = document.querySelector('#Box');


// Define the sound effects to be played
const screwdriverSound = new Audio("assets/screwdriver.mp3");
const hammerSound = new Audio("assets/hammer.mp3");
const wrenchSound = new Audio("assets/wrench.mp3");
const wirecutterSound = new Audio("assets/wirecutters.mp3");

// Add event listeners to each icon
icons.forEach(icon => {
  // When the drag starts, store the ID of the dragged icon
  icon.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", event.target.id);
    
    
  });
});

// Add event listeners to each title
boxes.forEach(box => {
  // When an icon is dragged over a box, prevent the default behavior
  box.addEventListener("dragover", event => {
    event.preventDefault();
  });

  // When an icon is dropped on a box, play the sound effect
  box.addEventListener("drop", event => {
    event.preventDefault();

    // Get the ID of the dropped icon
    const iconId = event.dataTransfer.getData("text/plain");

    // Play the sound effect based on the element that was dropped on
    if (Gear1 === event.target) {
      hammerSound.play();
    } else if (Gear2 === event.target) {
      wrenchSound.play();
    } else if (Box === event.target) {
      screwdriverSound.play();
    } else if (Gear3 === event.target) {
      wirecutterSound.play();
    }

 else if (Gear4 === event.target) {
  hammerSound.play();
}

else if (Gear5 === event.target) {
  hammerSound.play();
}

    console.log(`Icon ${iconId} dropped on ${box.innerText}`);
  });
});
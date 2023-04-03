// Get all the draggable icons
const icons = document.querySelectorAll(".container img");
const Gear1 = document.querySelector('#icon3');
const Gear2 = document.querySelector('#icon4');
const Gear3 = document.querySelector('#icon5');
const Gear4 = document.querySelector('#icon6');
const Gear5 = document.querySelector('#icon1');
const Gear6 = document.querySelector('#icon2');

// Get all the title elements
const boxes = document.querySelectorAll(".DragDropBox");
const Box = document.querySelector('#Box');


// Define the sound effects to be played
const screwdriverSound = new Audio("assets/screwdriver.mp3");
const hammerSound = new Audio("assets/Hammer.mp3");
const wrenchSound = new Audio("assets/wrench.mp3");
const wirecutterSound = new Audio("assets/wirecutters.mp3");
const disksound = new Audio("assets/disk.mp3");
const metalsound = new Audio("assets/metal.mp3");

// Add event listeners to each icon
icons.forEach(icon => {
  // When the drag starts, store the ID of the dragged icon
  icon.addEventListener("dragstart", event => {
    //debugger;
    event.dataTransfer.setData("target", event.target.id);

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
    const iconId = event.dataTransfer.getData("target");
    debugger;
    // Play the sound effect based on the element that was dropped on
    if (Gear1.id === iconId) {
      hammerSound.play();
    } else if (Gear2.id === iconId) {
      wrenchSound.play();
    } else if (Gear6.id === iconId) {
      screwdriverSound.play();
    } else if (Gear3.id === iconId) {
      wirecutterSound.play();
    } else if (Gear4.id === iconId) {
      disksound.play();
    } else if (Gear5.id === iconId) {
      metalsound.play();
}

    console.log(`Icon ${iconId} dropped on ${Box.innerText}`);
  });
});
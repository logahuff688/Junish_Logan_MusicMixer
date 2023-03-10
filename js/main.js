// Get all the draggable icons
const icons = document.querySelectorAll("#icon");

// Get all the title elements
const boxes = document.querySelectorAll(".DragDropBox");
const boxDefault = "images/box.png"
const boxDragged = "images/boxDragged.png"

// Define the sound effect to be played
const soundEffect = new Audio("assets/disk.mp3");

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

    // Play the sound effect
    soundEffect.play();
  box.setAttribute("src", boxDragged);
  setTimeout(() => {
    box.setAttribute("src", boxDefault)
  }, 620);




    console.log(`Icon ${iconId} dropped on ${box.innerText}`);
  });
});


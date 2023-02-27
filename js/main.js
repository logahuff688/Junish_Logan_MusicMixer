// Get all the draggable icons
const icons = document.querySelectorAll(".audioIcon");

// Get all the title elements
const titles = document.querySelectorAll(".title");

// Define the sound effect to be played
const soundEffect = new Audio("assets/fart.mp3");

// Add event listeners to each icon
icons.forEach(icon => {
  // When the drag starts, store the ID of the dragged icon
  icon.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});

// Add event listeners to each title
titles.forEach(title => {
  // When an icon is dragged over a title, prevent the default behavior
  title.addEventListener("dragover", event => {
    event.preventDefault();
  });

  // When an icon is dropped on a title, play the sound effect
  title.addEventListener("drop", event => {
    event.preventDefault();

    // Get the ID of the dropped icon
    const iconId = event.dataTransfer.getData("text/plain");

    // Play the sound effect
    soundEffect.play();

    console.log(`Icon ${iconId} dropped on ${title.innerText}`);
    if (console.error) {
        console.log("Error!");
    }
  });
});


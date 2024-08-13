// Select The Start Game Button
document.querySelector(".control-buttons").onclick = function () {
  // Prompt Window To Ask For Name
  let yourNmae = prompt("What is your name ?");
  // If Name Is Empty
  if (yourNmae == null || yourNmae == "") {
    // Set Name To Unknown
    document.querySelector(".name span").innerHTML = "Unknown";
    // Name Is Not Empty
  } else {
    // Set Nsme To Your Name
    document.querySelector(".name span").innerHTML = yourNmae;
  }
  // Remove Splash Screen
  document.querySelector(".control-buttons").remove();
};
// Effect Duration
let duration = 1000;
// Select Blocks From Container
let blocksContainer = document.querySelector(".memory-game-blocks");
// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);
// Create Range Of Kesys
let orderRnage = [...Array(blocks.length).keys()];
console.log(orderRnage);
shuffle(orderRnage);
console.log(orderRnage);
// Add Order CSS Property  To Game Blocks

blocks.forEach((block, index) => {
  block.style.order = orderRnage[index];
  // Add Click Event
  block.addEventListener("click", function () {
    // Trigger The Flip Block Function
    flipBlock(block);
  });
});

// Flip Block Function
function flipBlock(selectedBlock) {
  // Add Class Is Flipped
  selectedBlock.classList.add("is-flipped");
  // Collect All Flipped Cards
  let allFlippedBlock = blocks.filter((flipBlock) =>
    flipBlock.classList.contains("is-flipped")
  );
  // If Theres Tow Selected Blocks
  if (allFlippedBlock.length === 2) {
    // Stop Clicking Function
    stopClicking();
    // Check Mached Block Function
    checkMachedBlock(allFlippedBlock[0], allFlippedBlock[1]);
  }
}
// Stop Clicking Function
function stopClicking() {
  // Add Class No Clicking On Main Container
  blocksContainer.classList.add("no-clicking");

  setTimeout(() => {
    // Remove Class No Clicking After The Duration
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}
// Check Mached Block Function
function checkMachedBlock(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");
  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");
    firstBlock.classList.add("has-mach");
    secondBlock.classList.add("has-mach");
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
  }
}

// Shuffle Function
function shuffle(array) {
  // Settings Vars
  let current = array.length,
    temp,
    randem;
  while (current > 0) {
    // Get Random Number
    randem = Math.floor(Math.random() * current);
    // Decrease Length By One
    current--;
    // [1] Save Current Element in Stash
    temp = array[current];
    // [2] Current Element = Random Element
    array[current] = array[randem];

    // [3] Random Element = Get Element From Stash
    array[randem] = temp;
  }
  return array;
}

// Current Array [9, 2, 10, 4, 5, 6, 7, 3, 1, 8]
/*
  [1] Save Current Element in Stash
  [2] Current Element = Random Element
  [3] Random Element = Get Element From Stash
*/

// document.querySelector(".control-buttons").onclick = function () {
//   let yourName = "";

//   while (yourName == null || yourName.trim() == "") {
//     yourName = prompt("What is your name?");
//   }

//   document.querySelector(".name span").innerHTML = yourName;
//   document.querySelector(".control-buttons").remove();
// };

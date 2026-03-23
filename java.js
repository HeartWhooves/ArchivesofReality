//no idea what im doing with this, im not here yet

//Next Buttons for introduction text

// Select the elements using their IDs
const textareaElement = document.getElementById('Introduction');
const nextButtonElement = document.getElementById('nextIntro');
const prevButtonElement = document.getElementById('prevIntro');

// Define the function to change the content
function nextIntro() {
    textareaElement.value = '   As you explore the various sections of this Archive, you will find information about each character, world, and major event that make up these tales. Each story is carefully curated and translated to ensure that the stories will never fade to shadow. It will take time to digitize my collection, and even longer to enscribe the fullly preserved tapestries as they are everchanging windows into all time and space in its depicted reality. I appreciate your patience as my team and I work to bring these stories to you.';
}

function prevIntro() {
    textareaElement.value = '   Welcome to My Archive, My personal collection of tapestries and stories gathered from the depths of the Cosmic Loom itself. The tales you will read here are older than time itself, gathered straight from the source and preserved outside the bounds of the multiverse. This Website will be your window into these dreams, and I will be your guide as Currator and Archivist.';
}

// Add a click event listener to the button
nextButtonElement.addEventListener('click', nextIntro);
prevButtonElement.addEventListener('click', prevIntro);

//make the pets change the image

//Select the elements using their IDs
const petDiv = document.getElementById('PetsIntro');
const IntroImage = document.getElementById('IntroductionImage');

// Store the original and new image sources
const originalSrcI = 'images/Archivist Dialogue Image.png';
const newSrcI = 'images/Archivist Dialogue Image (Pet).png';

// Function to change the image source on mouse enter
function changeImage() {
    IntroImage.src = newSrcI;
}

// Function to revert the image source on mouse leave
function restoreImage() {
    IntroImage.src = originalSrcI;
}

// Add event listeners for mouseenter and mouseleave
petDiv.addEventListener('mouseenter', changeImage);
petDiv.addEventListener('mouseleave', restoreImage);
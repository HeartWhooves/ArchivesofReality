//no idea what im doing with this, im not here yet
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

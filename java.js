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

// Add listeners only on pages that contain the introduction controls
if (textareaElement && nextButtonElement && prevButtonElement) {
    nextButtonElement.addEventListener('click', nextIntro);
    prevButtonElement.addEventListener('click', prevIntro);
}

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

// Add listeners only on pages that contain the pet interaction
if (petDiv && IntroImage) {
    petDiv.addEventListener('mouseenter', changeImage);
    petDiv.addEventListener('mouseleave', restoreImage);
}

// Label Js Below Here
document.addEventListener('DOMContentLoaded', () => {

const viewCrop = document.querySelector('.ViewCrop');
const viewLabel = document.getElementById('ViewLabel');

if (viewCrop && viewLabel) {

window.addEventListener('mousemove', (e) => {
    viewLabel.style.setProperty('--x', (e.clientX) + 25 + 'px');
    viewLabel.style.setProperty('--y', (e.clientY) + 25 + 'px');
});
}
});
//Label Js Ends Here

//Disk of the Day JS Below Here
if (DailySong && DiskoftheDay) {
const audio = document.getElementById('DailySong');
const button = document.getElementById('DiskoftheDay');

        function toggleMusic() {
            if (audio.paused) {
                audio.play();
                button.classList.add('playing');
            } else {
                audio.pause();
                button.classList.remove('playing');
            }
        }

           // Adjusts audio volume dynamically
        function changeVolume(val) {
            audio.volume = val;
        }
    }

// Status Block JS Below Here
if (mood && Status && currently) {
  async function fetchStatus() {
    try {
      // Direct URL with your ID included correctly
        const response = await fetch('https://api.jsonbin.io/v3/b/6aa60ab6ffd5d1605300196b/latest?update=true', {
        method: 'GET',
        headers: { 
          'X-Master-Key': '$2a$10$C2eVwhBgF5Gj0kuPxfcDvOyNONksdPjNh3.P/xTCMIpo.g7iSq62O', // <--- Put your Master Key here
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.record) {
        document.getElementById('mood').innerText = data.record.mood || 'Lost';
        document.getElementById('Status').innerText = data.record.status || 'Silent';
        document.getElementById('currently').innerText = data.record.currently || 'Bored';
      }

    } catch (error) {
      console.error('Error fetching status:', error);
      document.getElementById('status').innerText = `Error: ${error.message}`;
    }
  }

  fetchStatus();
}

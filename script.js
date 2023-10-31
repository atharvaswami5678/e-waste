// Get references to the select element and body element
const categorySelect = document.getElementById('category');
const body = document.body;

// Define an object to map category values to background images
const backgroundImages = {
    cooling: 'cooling-background.jpg',
    computers: 'computers.jpg',
    solar: 'solar.jpg',
    led: 'led.jpg',
    vending: 'vending.png',
};

// Function to change the background image based on the selected option
function changeBackgroundImage() {
    const selectedCategory = categorySelect.value;
    const backgroundImage = backgroundImages[selectedCategory];
    body.style.backgroundImage = `url('${backgroundImage}')`;
}

// Add an event listener to the category select element
categorySelect.addEventListener('change', changeBackgroundImage);

/////////////////////////////////////////////////////////////


// Variables to manage the ingredients and steps
let currentStep = 0;
const steps = document.querySelectorAll('.steps .step');
const ingredientsList = document.querySelector('.ingredients');
const toggleIngredientsButton = document.getElementById('toggle-ingredients');
const startCookingButton = document.getElementById('start-cooking');

// Function to toggle ingredients visibility
toggleIngredientsButton.addEventListener('click', function() {
    ingredientsList.classList.toggle('hidden');
    this.textContent = ingredientsList.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
});

// Function to start cooking and highlight the first step
startCookingButton.addEventListener('click', function() {

    if (currentStep < steps.length) {
        steps[currentStep].classList.remove('hidden');
        currentStep++;
        updateProgress();
        if (currentStep >= steps.length) {
            this.textContent = 'All Steps Complete!';
            this.disabled = true; // Disable button when done
            window.alert("All Steps Complete!");

        } else {
            this.textContent = 'Next Step';
        }
    }
});

// Function to update the progress bar
function updateProgress() {
    const progressBar = document.getElementById('progress');
    const progressPercentage = (currentStep / steps.length) * 100; // Calculate percentage
    progressBar.style.width = `${progressPercentage}%`;
}

let preparationTime = 30; // in minutes
let timerInterval;

function startTimer() {
    let timeLeft = preparationTime * 60; // convert minutes to seconds
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Cooking time is up!");
        } else {
            timeLeft--;
            // Update timer display (could add a visual display)
        }
    }, 100);
}

// Call this function when "Start Cooking" is clicked
startCookingButton.addEventListener('click', function() {
    if (currentStep === 0) {
        startTimer(); // Start the timer when cooking starts
    }
});

// slecting the dom elements 
const advice = document.querySelector('.advice');
const id = document.querySelector('.id-number');
const button = document.querySelector('.button');
const img = document.querySelector('.icon');



// setting up the api 

api_url = "https://api.adviceslip.com/advice";


async function getAdvice() {
    const response = await fetch(api_url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;

}

async function displaydata() {
    const data = await getAdvice();
    const advice_data = data.slip.advice;
    const id_data = data.slip.id;

    advice.textContent = advice_data;
    id.textContent = id_data;
}


// Select the icon element
const icon = document.querySelector('.icon');

function handleClickButton() {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Add the 'rotate-360' class to start the animation
        icon.classList.add('rotate-360');

        // Remove the class after the animation duration (0.5s)
        setTimeout(() => {
            icon.classList.remove('rotate-360');
        }, 500);

        // Fetch and display new advice
        displaydata();
    });
}

handleClickButton();
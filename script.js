let snowButton = document.getElementById('snowButton');
let formButton = document.getElementById('formSend');
let userForm = document.getElementById('userForm');
let snowing = false;
let snowInterval;
let backgroundMusic;
let backgroundMusic2;

document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic2 = document.getElementById('backgroundMusic2');
    backgroundMusic.play();
});


formButton.addEventListener('click', () => {
    if (snowing) {
        clearInterval(snowInterval);
        //snowButton.textContent = 'Faire neiger';
        backgroundMusic2.pause();
    } else {
        snowInterval = setInterval(createSnowflake, 50); // créer un flocon toutes les 50 millisecondes
        //snowButton.textContent = 'Arrêter de neiger';
        backgroundMusic2.play();
        backgroundMusic2.remove();
        //backgroundMusic2.volume = 0.1;
    }
    snowing = !snowing;
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // entre 2 et 5 secondes
    document.getElementById('snowflakes').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // enlever le flocon après 5 secondes
}

document.getElementById('userForm').addEventListener('submit', (event) => {
    userForm.style.display = 'none';
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userPhoto = document.getElementById('userPhoto').files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const photoURL = e.target.result;
        const personalizedMessage = `
            <h2 style="
                    font-size: 50px;
                    font-weight: bold; 
                    margin-bottom: 1em;"
            >
                    🎅 Joyeux Noël , 🎅
                    <br>
                    🎅 ${userName}! 🎅
            </h2>
            <img src="${photoURL}" alt="Photo de ${userName}" 
                style="
                    width: 300px; 
                    height: 300px;
                    border-radius: 100%;
                "
            >
        `;
        document.getElementById('personalizedMessage').innerHTML = personalizedMessage;
       // backgroundMusic.pause();
        backgroundMusic2.play();
        setTimeout(() => {
            backgroundMusic2.pause();
            //backgroundMusic.play();
        }, 3000);
    };

    if (userPhoto) {
        reader.readAsDataURL(userPhoto);
    }
});
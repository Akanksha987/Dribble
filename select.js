const button = document.querySelector('button');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function handleButtonClick() {
    document.body.style.backgroundColor = getRandomColor();
    alert('Thank you for your response! Your selection has been recorded.');
}

button.addEventListener('click', handleButtonClick);
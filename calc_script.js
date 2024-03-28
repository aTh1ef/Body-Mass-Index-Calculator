function openImagePopup(imageUrl) {
    // Open a new window with the image
    window.open(imageUrl, 'Image Popup', 'width=600,height=400,resizable=yes');
}

window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);

    // Add event listener to the Health Care Centers button
    const healthCentersButton = document.querySelector('#healthCentersBtn');
    healthCentersButton.addEventListener('click', redirectToMapPage);
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
        result.innerText += `\nPeople in this BMI range have a higher risk of diabetes.`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
        result.innerText += `\nPeople in this BMI range have a significantly higher risk of diabetes.`;
    }
}

function redirectToMapPage() {
    window.location.href = 'map.html';
}

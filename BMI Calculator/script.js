const button = document.querySelector('.button');
const result = document.querySelector('.result');
const msg = document.querySelector('.msg');


button.addEventListener('click', (e) =>{
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);

    if (isNaN(weight) || isNaN(height) || weight<0 || height<0){
        result.textContent = "Please enter the valid height or weight.";
         msg.innerHTML = "";
        return;
    }
    // calculate bmi
    const bmi = (weight / Math.pow(height, 2));
    result.textContent = `Your BMI is ${bmi}`;

    // Display BMI message
    if (bmi < 18.5) {
        msg.innerHTML = `<span>You are underweight!</span>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        msg.innerHTML = `<span>You are Normal weight!</span>`;
    } else {
        msg.innerHTML = `<span>You are overweight!</span>`;
    }

});
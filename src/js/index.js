const BMI = new BMICalculator();
const weightInput = document.querySelector("input[name=weight]");
const heightInput = document.querySelector("input[name=height]");
const button = document.getElementById("submit-button");
const messageElement = document.getElementById('return-message');

button.addEventListener('click', () => {

  if (weightInput.value === '') {
    debugger
    messageElement.innerText = "HEY,YOU NEED TO GIVE US YOUR WEIGHT";
  } else if ((weightInput.value === '') || (heightInput.value === '')) {
    messageElement.innerText = "HEY,YOU NEED TO GIVE US YOUR HEIGHT";
  } else {
    const BMIResult = BMI.calculateMetric({
      height: heightInput.value,
      weight: weightInput.value
    });
    messageElement.innerText = `BMI: ${BMIResult.value} - ${BMIResult.classification}`;
  }
});
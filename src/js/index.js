const BMI = new BMICalculator();
const weightInput = document.querySelector("input[id=weight]");
const heightInput = document.querySelector("input[id=height]");
const button = document.getElementById("submit-button");
const messageElement = document.getElementById('return-MESSAGE');

button.addEventListener('click', () => {
  if (weightInput.value === ''){
    messageElement.innerText =
    "HEY,YOU NEED TO GIVE US YOUR Weight";
  } else if ((weightInput.value === '') || (heightInput.value === '')){
    messageElement.innerText = "HEY,YOU NEED TO GIVE US YOUR Weight AND HEIGHT"
  }else{
    const BMIResult = BMI.calculateMetric({ height: heightInput.value, weight: weightInput.value });
        messageElement.innerText = `BMI: ${BMIResult.value} - ${BMIResult.classification}`;
  }
});

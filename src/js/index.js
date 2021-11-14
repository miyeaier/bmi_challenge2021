const BMI = new BMICalculator();
const weightInput = document.querySelector("input[name=weight]");
const heightInput = document.querySelector("input[name=height]");
const button = document.getElementById("submit-button");
const messageElement = document.getElementById('popup-message');

button.addEventListener('click', () => {
  if (weightInput.value === ''){
    messageElement.innerText =
    "HEY,YOU NEED TO GIVE US YOU Weight";
  } else if ((weightInput.value === '') || (hightInput.value === '')){
    messageElement.innerText = "HEY,YOU NEED TO GIVE US YOU Weight AND HEIGHT"
  }else{
    const BMIResult = BMI.calculateBMIMetric({ height: heightInput.value, weight: weightInput.value });
        messageElement.innerText = `BMI: ${BMIResult.value} - ${BMIResult.classification}`;
  }
  
});

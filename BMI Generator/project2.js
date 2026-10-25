const form = document.querySelector("form"); 

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const results = document.querySelector('#results')

  if(height == '' || height <=0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if(weight == '' || weight <=0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`; 
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is ${bmi} <br> You are ${bmi < 18.5 ? 'underweight' : bmi < 25 ? 'normal weight' : bmi < 30 ? 'overweight' : 'obese'}`;
  }

});
const form = document.querySelector("form"); 

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const results = document.querySelector('#results')


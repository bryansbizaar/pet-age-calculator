function calculateDogAge(dogYears) {
  if (dogYears <= 0) {
    return 0;
  } else if (dogYears <= 1) {
    return dogYears * 10.5;
  } else if (dogYears <= 2) {
    return 10.5 + (dogYears - 1) * 10.5;
  } else {
    return 21 + (dogYears - 2) * 4;
  }
}

function calculateCatAge(catYears) {
  if (catYears <= 0) {
    return 0;
  } else if (catYears <= 1) {
    return catYears * 15;
  } else if (catYears <= 2) {
    return 15 + (catYears - 1) * 9;
  } else {
    return 24 + (catYears - 2) * 4;
  }
}

function calculateRabbitAge(rabbitYears) {
  if (rabbitYears <= 0) {
    return 0;
  } else if (rabbitYears <= 1) {
    return rabbitYears * 21;
  } else if (rabbitYears <= 2) {
    return 21 + (rabbitYears - 1) * 6;
  } else {
    return 27 + (rabbitYears - 2) * 6;
  }
}

function calculatePetAge(petAge, petType) {
  switch (petType) {
    case "dog":
      return calculateDogAge(petAge);
    case "cat":
      return calculateCatAge(petAge);
    case "rabbit":
      return calculateRabbitAge(petAge);
    default:
      return 0;
  }
}

function displayResult(petAge, petType, humanAge) {
  const resultDiv = document.getElementById("result");

  if (humanAge > 0) {
    resultDiv.innerHTML = `
            Your ${petAge}-year-old ${petType.toLowerCase()} is approximately 
            <strong>${humanAge.toFixed(1)} years old</strong> in human years.
        `;
    resultDiv.classList.add("show");
  } else {
    resultDiv.innerHTML = "Please enter a valid age.";
    resultDiv.classList.remove("show");
  }
}

function handleCalculation() {
  const petAgeInput = document.getElementById("petAge");
  const petTypeSelect = document.getElementById("petType");

  const petAge = parseFloat(petAgeInput.value);
  const petType = petTypeSelect.value;

  if (isNaN(petAge) || petAge < 0) {
    displayResult(0, petType, 0);
    return;
  }

  const humanAge = calculatePetAge(petAge, petType);
  displayResult(petAge, petType, humanAge);
}

document.addEventListener("DOMContentLoaded", function () {
  const petAgeInput = document.getElementById("petAge");
  const petTypeSelect = document.getElementById("petType");

  petAgeInput.addEventListener("input", function () {
    if (this.value) {
      handleCalculation();
    } else {
      // Clear result when input is empty
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("show");
    }
  });

  petTypeSelect.addEventListener("change", function () {
    if (petAgeInput.value) {
      handleCalculation();
    }
  });
});

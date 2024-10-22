// Dosage calculation based on height, weight, and gender
function calculateDosage() {
    // Get user inputs
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const gender = document.getElementById("gender").value;
    
    // Validate input (simple check)
    if (!height || !weight || !gender) {
        alert("Please fill out all fields.");
        return;
    }

    // Initialize dosage variable
    let dosage = 0;

    // Basic formula for dosage calculation (example):
    // Male: weight * 0.6 mg per kg
    // Female: weight * 0.5 mg per kg
    if (gender === "male") {
        dosage = weight * 0.6;  // Example: 0.6 mg per kg for males
    } else if (gender === "female") {
        dosage = weight * 0.5;  // Example: 0.5 mg per kg for females
    }

    // Example: adjust dosage based on height
    if (height < 150) {
        dosage *= 0.95; // Decrease by 5% if height is under 150cm
    } else if (height > 180) {
        dosage *= 1.1;  // Increase by 10% if height is over 180cm
    }

    // Display result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Recommended Dosage: ${dosage.toFixed(2)} mg`;
}

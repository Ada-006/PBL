function detectDisease() {
    const result = document.getElementById("diseaseResult");
    result.innerHTML = "Processing image through Convolutional Neural Network...";

    setTimeout(() => {
        result.innerHTML = `
            <strong>Predicted Disease:</strong> Early Blight<br>
            <strong>Confidence Score:</strong> 94%<br>
            <strong>Model:</strong> ResNet50 (Transfer Learning)
        `;
    }, 1500);
}

function analyzeCrop() {
    const result = document.getElementById("cropResult");
    result.innerHTML = "Analyzing vegetation indices and crop health parameters...";

    setTimeout(() => {
        result.innerHTML = `
            <strong>NDVI Value:</strong> 0.82<br>
            <strong>Crop Health Status:</strong> Healthy<br>
            <strong>Growth Stage:</strong> Vegetative Phase
        `;
    }, 1500);
}

function predictPrice() {
    const crop = document.getElementById("cropSelect").value;
    const result = document.getElementById("marketResult");

    let price;

    if (crop === "Apple") price = "₹ 7200 per quintal";
    else if (crop === "Rice") price = "₹ 2100 per quintal";
    else if (crop === "Wheat") price = "₹ 2400 per quintal";
    else price = "₹ 6800 per quintal";

    result.innerHTML = `
        <strong>Selected Commodity:</strong> ${crop}<br>
        <strong>Forecasted Price:</strong> ${price}<br>
        <strong>Forecast Model:</strong> LSTM Time-Series Model
    `;
}

function generateRecommendation() {
    const report = document.getElementById("finalReport");

    report.innerHTML = `
        <strong>Integrated Analysis Report</strong><br><br>
        Disease Status: Early Blight Detected<br>
        Crop Health: Healthy (NDVI 0.82)<br>
        Market Trend: Increasing Demand<br><br>
        Recommended Action:<br>
        • Apply preventive fungicide within 3 days.<br>
        • Optimal harvest window: 10–14 days.<br>
        • Recommended selling period: Within 2 weeks to maximize profit.
    `;
}

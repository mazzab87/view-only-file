document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const darkIcon = themeToggle.querySelector('.dark-icon');
    const lightIcon = themeToggle.querySelector('.light-icon');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkIcon.classList.add('d-none');
        lightIcon.classList.remove('d-none');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkIcon.classList.toggle('d-none');
        lightIcon.classList.toggle('d-none');
        
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Carbon footprint calculator functionality
    function calculateFootprint() {
        // Get input values
        const carTravel = parseFloat(document.getElementById('carTravel').value) || 0;
        const flights = parseFloat(document.getElementById('flights').value) || 0;
        const electricity = parseFloat(document.getElementById('electricity').value) || 0;
        const gas = parseFloat(document.getElementById('gas').value) || 0;
        const meat = parseFloat(document.getElementById('meat').value) || 0;
        const recycling = parseFloat(document.getElementById('recycling').value) || 0;

        // Calculate emissions (simplified calculations)
        const carEmissions = carTravel * 52 * 0.2; // 0.2 kg CO2 per km
        const flightEmissions = flights * 1000; // 1 tonne per flight (average)
        const electricityEmissions = electricity * 12 * 0.5; // 0.5 kg CO2 per kWh
        const gasEmissions = gas * 12 * 2; // 2 kg CO2 per m³
        const meatEmissions = meat * 52 * 5; // 5 kg CO2 per meat meal
        const recyclingReduction = recycling * 10; // 10 kg reduction per % recycled

        // Calculate total emissions
        const totalEmissions = (carEmissions + flightEmissions + electricityEmissions + 
                              gasEmissions + meatEmissions - recyclingReduction) / 1000; // Convert to tonnes

        // Update result
        document.querySelector('.result').textContent = `${totalEmissions.toFixed(2)} tonnes CO₂e`;

        // Determine impact level
        const impactLevel = document.getElementById('impactLevel');
        if (totalEmissions < 5) {
            impactLevel.className = 'impact-level impact-low';
            impactLevel.textContent = 'Low Impact';
        } else if (totalEmissions < 10) {
            impactLevel.className = 'impact-level impact-medium';
            impactLevel.textContent = 'Medium Impact';
        } else {
            impactLevel.className = 'impact-level impact-high';
            impactLevel.textContent = 'High Impact';
        }

        // Generate recommendations
        const recommendationsList = document.querySelector('.recommendations-list');
        recommendationsList.innerHTML = '';
        
        if (carTravel > 100) {
            addRecommendation('Consider using public transport or carpooling to reduce car emissions');
        }
        if (flights > 5) {
            addRecommendation('Try to combine trips or use video conferencing when possible');
        }
        if (electricity > 300) {
            addRecommendation('Switch to energy-efficient appliances and LED lighting');
        }
        if (meat > 10) {
            addRecommendation('Consider reducing meat consumption and trying plant-based alternatives');
        }
        if (recycling < 50) {
            addRecommendation('Increase your recycling efforts to reduce waste impact');
        }
    }

    function addRecommendation(text) {
        const li = document.createElement('li');
        li.textContent = text;
        document.querySelector('.recommendations-list').appendChild(li);
    }

    // Add event listener to the calculate button
    const calculateButton = document.querySelector('.btn-calculate');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateFootprint);
    }
});
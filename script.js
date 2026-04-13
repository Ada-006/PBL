// Set current date on the UI
document.getElementById('date-display').innerText =
    `Data for: ${new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })}`;

async function fetchCropPrices() {
    const tableBody = document.getElementById('price-table-body');
    const searchQuery = document.getElementById('cropSearch').value.toLowerCase();

    tableBody.innerHTML = "<tr><td colspan='4' style='text-align:center;'>Loading current market rates...</td></tr>";

    try {
        const API_KEY = "";
   

        const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001e51b809c6f26478c529f62b7eeefb029&format=json`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const records = data.records || [];

        let filtered = records;

        if (searchQuery) {
            filtered = records.filter(item =>
                item.commodity && item.commodity.toLowerCase().includes(searchQuery)
            );
        }

        tableBody.innerHTML = "";

        if (filtered.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='4' style='text-align:center;'>No crops found.</td></tr>";
            return;
        }

        filtered.forEach(item => {
            const row = `
                <tr>
                    <td><strong>${item.commodity}</strong></td>
                    <td>${item.market}</td>
                    <td>${item.state}</td>
                    <td style="color: #16a34a; font-weight: bold;">₹ ${item.modal_price}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        tableBody.innerHTML = "<tr><td colspan='4' style='color:red; text-align:center;'>Error connecting to government servers.</td></tr>";
        console.error(error);
    }
}

// Load data on page load
window.onload = fetchCropPrices;
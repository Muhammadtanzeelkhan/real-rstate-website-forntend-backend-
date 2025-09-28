let rentalsData = [];
const rentList = document.getElementById("rentList");
const searchBox = document.getElementById("searchBox");
const sortOptions = document.getElementById("sortOptions");
const filterCity = document.getElementById("filterCity");

// Optional: Loading indicator
const loadingDiv = document.createElement("div");
loadingDiv.innerHTML = `<p style="text-align:center; color:#007bff;">Loading rentals...</p>`;
loadingDiv.id = "loadingDiv";
rentList.appendChild(loadingDiv);

async function fetchRentals() {
  try {
    const res = await fetch("/api/rent");
    if (!res.ok) throw new Error("Network error");
    const rentals = await res.json();
    rentalsData = rentals;
    displayRentals(rentalsData);
  } catch (err) {
    console.error(err);
    rentList.innerHTML = `<p style="text-align:center; color:red;">Failed to load rentals.</p>`;
  }
}

function displayRentals(rentals) {
  if (!rentals.length) {
    rentList.innerHTML = `<p style="text-align:center;">No rentals found.</p>`;
    return;
  }
  rentList.innerHTML = rentals.map(r => `
    <div class="rent-card">
      <img src="${r.image}" alt="${r.title}">
      <div class="rent-info">
        <h3>${r.title}</h3>
        <p><strong>Location:</strong> ${r.location}</p>
        <p class="price">${r.price} PKR</p>
        <p><strong>Beds:</strong> ${r.beds || 'N/A'} | <strong>Baths:</strong> ${r.baths || 'N/A'} | <strong>Area:</strong> ${r.area || 'N/A'}</p>
      </div>
    </div>
  `).join('');
}

function applyFilters() {
  let filtered = [...rentalsData];

  // Search
  const search = searchBox.value.toLowerCase();
  if (search) filtered = filtered.filter(r => r.location.toLowerCase().includes(search));

  // City
  const city = filterCity.value;
  if (city) filtered = filtered.filter(r => r.location === city);

  // Sort
  const sortVal = sortOptions.value;
  if (sortVal === "lowToHigh") filtered.sort((a,b) => a.price - b.price);
  if (sortVal === "highToLow") filtered.sort((a,b) => b.price - a.price);

  displayRentals(filtered);
}

// Event listeners
searchBox.addEventListener("input", applyFilters);
sortOptions.addEventListener("change", applyFilters);
filterCity.addEventListener("change", applyFilters);

// Initial fetch
fetchRentals();

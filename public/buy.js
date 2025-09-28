let buyData = [];

// Fetch buy listings from server
async function fetchBuyProperties() {
  try {
    const res = await fetch("/api/rent"); // Change to /api/buy if you have separate API
    const properties = await res.json();
    buyData = properties;
    displayBuyProperties(properties);
  } catch (err) {
    console.error(err);
    alert("⚠️ Failed to load buy properties.");
  }
}

// Display property cards
function displayBuyProperties(properties) {
  const container = document.getElementById("buyList");
  container.innerHTML = properties.map(p => `
    <div class="rent-card">
      <img src="${p.image}" alt="${p.title}">
      <div class="rent-info">
        <h3>${p.title}</h3>
        <p><strong>Location:</strong> ${p.location}</p>
        <p class="price">${p.price} PKR</p>
        <p><strong>Beds:</strong> ${p.beds} | <strong>Baths:</strong> ${p.baths} | <strong>Area:</strong> ${p.area}</p>
      </div>
    </div>
  `).join('');
}

// Search filter
document.getElementById("searchBox").addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  const filtered = buyData.filter(p => p.location.toLowerCase().includes(search));
  displayBuyProperties(filtered);
});

// Sort filter
document.getElementById("sortOptions").addEventListener("change", (e) => {
  let sorted = [...buyData];
  if (e.target.value === "lowToHigh") sorted.sort((a,b) => a.price - b.price);
  if (e.target.value === "highToLow") sorted.sort((a,b) => b.price - a.price);
  displayBuyProperties(sorted);
});

// City filter
document.getElementById("filterCity").addEventListener("change", (e) => {
  const city = e.target.value;
  const filtered = city ? buyData.filter(p => p.location === city) : buyData;
  displayBuyProperties(filtered);
});

// Initialize
fetchBuyProperties();

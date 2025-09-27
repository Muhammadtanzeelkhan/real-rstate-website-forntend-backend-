let rentalsData = [];

async function fetchRentals() {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");

  try {
    const response = await fetch("http://localhost:5000/api/v1/rent");
    if (!response.ok) throw new Error("Network error");

    rentalsData = await response.json();
    displayRentals(rentalsData);

  } catch (err) {
    console.error("Error fetching rentals:", err);
    alert("⚠️ Failed to load rental properties.");
  } finally {
    loading.classList.add("hidden");
  }
}

function displayRentals(rentals) {
  const rentList = document.getElementById("rentList");
  rentList.innerHTML = "";

  rentals.forEach(rental => {
    const card = document.createElement("div");
    card.className = "rent-card";
    card.innerHTML = `
      <img src="${rental.image}" alt="${rental.title}">
      <div class="rent-info">
        <h3>${rental.title}</h3>
        <p class="price">${rental.price} PKR</p>
        <p><strong>Location:</strong> ${rental.location}</p>
      </div>
    `;
    rentList.appendChild(card);
  });
}

// Search functionality
document.getElementById("searchBox").addEventListener("input", e => {
  const searchText = e.target.value.toLowerCase();
  const filtered = rentalsData.filter(r =>
    r.location.toLowerCase().includes(searchText)
  );
  displayRentals(filtered);
});

// Sort functionality
document.getElementById("sortOptions").addEventListener("change", e => {
  const value = e.target.value;
  let sorted = [...rentalsData];
  if (value === "lowToHigh") sorted.sort((a,b) => a.price - b.price);
  if (value === "highToLow") sorted.sort((a,b) => b.price - a.price);
  displayRentals(sorted);
});

// Filter by city
document.getElementById("filterCity").addEventListener("change", e => {
  const city = e.target.value;
  let filtered = city ? rentalsData.filter(r => r.location === city) : rentalsData;
  displayRentals(filtered);
});

// Load button
document.getElementById("loadRentals").addEventListener("click", fetchRentals);

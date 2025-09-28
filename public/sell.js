const form = document.getElementById("sellForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const property = {
    title: document.getElementById("title").value,
    location: document.getElementById("location").value,
    price: parseInt(document.getElementById("price").value),
    beds: parseInt(document.getElementById("beds").value),
    baths: parseInt(document.getElementById("baths").value),
    area: document.getElementById("area").value,
    image: document.getElementById("image").value
  };

  try {
    // For now, just log the property
    console.log("Property Submitted:", property);

    // Show confirmation message
    confirmation.classList.remove("hidden");

    // Reset form
    form.reset();

    // Hide confirmation after 3 seconds
    setTimeout(() => {
      confirmation.classList.add("hidden");
    }, 3000);

    // TODO: Send to server via POST request
    // await fetch('/api/sell', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(property) });

  } catch (err) {
    console.error("Error submitting property:", err);
    alert("Failed to submit property. Try again.");
  }
});

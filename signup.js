function handleSignUp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value;

  const nameInput = document.getElementById("name");
  const yearSelect = document.getElementById("year");

  let hasError = false;

  // Simple validation
  if (!name) {
    nameInput.style.border = "2px solid red";
    hasError = true;
  } else {
    nameInput.style.border = "";
  }

  if (!year) {
    yearSelect.style.border = "2px solid red";
    hasError = true;
  } else {
    yearSelect.style.border = "";
  }

  if (hasError) return;

  const message = `${name} is a ${year} and has signed up for ClubFair.`;
  const display = document.getElementById("signUpDisplay");
  const p = document.createElement("p");
  p.textContent = message;
  display.appendChild(p);

  event.target.reset();

  // Show modal
  const modal = document.getElementById("thankYouModal");
  const img = document.getElementById("thankYouImage");
  modal.classList.remove("hidden");

  // Animate image using setInterval
  let scale = 1;
  let growing = true;
  const interval = setInterval(() => {
    scale += growing ? 0.05 : -0.05;
    img.style.transform = `scale(${scale})`;
    if (scale >= 1.2) growing = false;
    if (scale <= 1) growing = true;
  }, 50);

  // Close modal after 3 seconds
  setTimeout(() => {
    clearInterval(interval);
    modal.classList.add("hidden");
  }, 3000);
}

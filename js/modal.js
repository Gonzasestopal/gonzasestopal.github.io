function openModal(url) {
  const overlay = document.getElementById("modal-overlay");
  const frame = document.getElementById("modal-frame");

  // Cargar el contenido del archivo modal (HTML)
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      frame.innerHTML = html;
      overlay.classList.add("open");
    })
    .catch((error) => {
      console.error("Error loading modal content:", error);
    });
}

function closeModal(event) {
  const overlay = document.getElementById("modal-overlay");
  const frame = document.getElementById("modal-frame");

  // If event is provided, only close if clicking on the overlay itself (not the modal content)
  if (event && event.target) {
    if (event.target.id === "modal-overlay") {
      overlay.classList.remove("open");
      frame.innerHTML = "";
    }
  } else {
    // If no event or event.target is undefined, close anyway (for programmatic calls)
    overlay.classList.remove("open");
    frame.innerHTML = "";
  }
}

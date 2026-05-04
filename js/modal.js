const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const closeBtn = document.getElementById("closeModal");

// SAFETY CHECK
if (modal && title && desc && closeBtn) {

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            const h3 = card.querySelector("h3");
            const p = card.querySelector("p");

            title.textContent = h3 ? h3.textContent : "Project";
            desc.textContent = p ? p.textContent : "No description";

            modal.style.display = "flex";
        });
    });

    // CLOSE BUTTON
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // CLICK OUTSIDE
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

}
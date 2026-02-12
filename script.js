tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "#111" },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: ["#888", "#555", "#aaa"] },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: { enable: true, minimumValue: 0.2 } },
    size: { value: 3, random: { enable: true, minimumValue: 1 } },
    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" }
    },
    links: { enable: false }
  },
  retina_detect: true,
  interactivity: { detectsOn: "canvas", events: { onHover: { enable: false }, onClick: { enable: false } } }
});

document.getElementById("joinBtn").addEventListener("click", () => {
  const id = window.GAME_ID;
  if (id) {
    window.location.href = "https://www.roblox.com/games/" + encodeURIComponent(id);
  } else {
    console.error("Game ID not found");
  }
});

document.getElementById("discordBtn")?.addEventListener("click", () => {
  window.open("https://discord.gg/dashood", "_blank");
});

const themeBtn = document.getElementById("themeToggle");
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  themeBtn.textContent =
    document.body.classList.contains("dark") ? "🌙 Night" : "☀️ Day";
});

const modal = document.getElementById("ticketModal");

document.getElementById("ticketBtn")?.addEventListener("click", () => {
  modal.style.display = "flex";
});

document.getElementById("closeModal")?.addEventListener("click", () => {
  modal.style.display = "none";
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

const modal = document.getElementById("ticketModal");
const sendBtn = document.querySelector(".send-btn");

document.getElementById("ticketBtn")?.addEventListener("click", () => {
  modal.classList.add("show");
});

function closeModal() {
  modal.classList.remove("show");
}

document.getElementById("closeModal")?.addEventListener("click", closeModal);

modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

sendBtn?.addEventListener("click", () => {
  const inputs = modal.querySelectorAll("input, textarea");
  inputs.forEach(el => el.value = "");
  closeModal();
});

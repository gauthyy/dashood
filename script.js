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

document.getElementById("discord-btn").addEventListener("click", () => {
    window.open("https://discord.gg/dashood", "_blank");
});

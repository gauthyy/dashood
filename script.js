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

// Join Now button click using cors-anywhere.com
document.getElementById("joinBtn").addEventListener("click", async () => {
  try {
    const resp = await fetch(
      "https://cors-anywhere.com/https://pastebin.com/raw/ZqWTrmmXj",
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Origin": window.location.origin
        }
      }
    );

    if (!resp.ok) throw new Error("Failed to fetch game ID");

    const id = (await resp.text()).trim();
    if (id) {
      window.location.href = "https://www.roblox.com/games/" + encodeURIComponent(id);
    } else {
      console.error("Game ID is empty");
    }
  } catch (e) {
    console.error("Error fetching game ID:", e);
  }
});

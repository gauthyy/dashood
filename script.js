// initialize tsParticles
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "#111" },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: "#888" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: { enable: true, minimumValue: 0.2 } },
    size: { value: 3, random: { enable: true, minimumValue: 1 } },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" }
    },
    links: {
      enable: false
    }
  },
  retina_detect: true,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: false },
      onClick: { enable: false }
    }
  }
});

// handle join button click
document.getElementById("joinBtn").addEventListener("click", async () => {
  try {
    const resp = await fetch("https://pastebin.com/raw/ZqWTrmmX");
    if (!resp.ok) throw new Error("Failed to fetch game id");
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

const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const circles = [];
for (let i = 0; i < 50; i++) {
  circles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 20 + 5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: `rgba(255,255,255,${Math.random()*0.1})`
  });
}

function draw() {
  const grad = ctx.createLinearGradient(0,0,w,h);
  grad.addColorStop(0, '#111');
  grad.addColorStop(0.5, '#222');
  grad.addColorStop(1, '#111');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,w,h);

  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;

    // Bounce off edges
    if(c.x < 0 || c.x > w) c.dx *= -1;
    if(c.y < 0 || c.y > h) c.dy *= -1;
  });

  requestAnimationFrame(draw);
}

draw();

(() => {
  const canvas = document.getElementById('stars-canvas');
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mql.matches) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  let w = 0, h = 0;
  function resize() {
    const rect = { width: window.innerWidth, height: window.innerHeight };
    w = Math.floor(rect.width * dpr);
    h = Math.floor(rect.height * dpr);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }
  resize();
  window.addEventListener('resize', () => {
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    resize();
  });

  const LAYERS = [
    { count: 40, speed: 40, size: [1, 2], opacity: 0.5 }, // far
    { count: 25, speed: 80, size: [2, 3], opacity: 0.75 }, // near
  ];

  /** @type {{x:number,y:number,r:number,vy:number,vx:number,a:number}[]} */
  const stars = [];
  function rand(min, max) { return Math.random() * (max - min) + min; }
  function initLayer(layerIdx) {
    const layer = LAYERS[layerIdx];
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rand(layer.size[0], layer.size[1]) * dpr,
        vy: (layer.speed / 60) * dpr,
        vx: -0.15 * dpr,
        a: layer.opacity,
      });
    }
  }
  for (let li = 0; li < LAYERS.length; li++) initLayer(li);

  let lastTs = 0;
  let req = 0;
  function step(ts) {
    const dt = Math.min(32, ts - lastTs || 16);
    lastTs = ts;
    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.fillStyle = 'white';
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.y += s.vy * (dt / 16);
      s.x += s.vx * (dt / 16);
      if (s.y - s.r > h || s.x + s.r < 0) {
        s.x = w + rand(0, 50);
        s.y = -rand(0, h * 0.2);
      }
      ctx.globalAlpha = s.a;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    req = requestAnimationFrame(step);
  }
  req = requestAnimationFrame(step);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(req); }
    else { lastTs = 0; req = requestAnimationFrame(step); }
  });
})();

const c: HTMLCanvasElement | null = document.getElementById("canvas") as HTMLCanvasElement | null;
const ctx: CanvasRenderingContext2D | null = c?.getContext("2d");

ctx?.canvas && ((ctx.canvas.width = window.innerWidth), (ctx.canvas.height = window.innerHeight));

window.onresize = function () {
  ctx?.canvas && ((ctx.canvas.width = window.innerWidth), (ctx.canvas.height = window.innerHeight));
};

let dots: { x: number; y: number; xv: number; yv: number; col: string; rad: number }[] = [];
let emitRate: number = 9;
let minRad: number = 1;
let maxRad: number = 5;
let color: string = "";
let opc: number = 0.6;
let sha: number = 0;
let lifeTime: number = 30;
let tn: number = 0;
let roc: number = 1;
let speed: number = 1;

class Controls {
  emitRate: number = emitRate;
  spread: number = speed;
  radiusMin: number = minRad;
  radiusMax: number = maxRad;
  color: string = "#ffffff";
  opacity: number = opc;
  glow: number = sha;
  onChange_redraw: boolean = false;
  randomColor: boolean = true;
  lifeTime: number = lifeTime;
  circleShape: boolean = true;

  redraw(): void {
    emitRate = this.emitRate;
    speed = this.spread;
    minRad = this.radiusMin;
    maxRad = this.radiusMax;
    lifeTime = this.lifeTime;
    color = this.color;
    opc = this.opacity;
    sha = this.glow;
    if (this.onChange_redraw) {
      dots.splice(0, dots.length);
    }
    roc = this.circleShape ? 1 : 0;
    if (this.randomColor) {
      color = "";
    }
  }
}

const controls = new Controls();

const gui = new dat.GUI({ resizable: false });
gui.add(controls, "emitRate", 2, 100).step(1).onChange(controls.redraw);
gui.add(controls, "spread", 0.1, 5).onChange(controls.redraw);
gui.add(controls, "lifeTime", 10, 300).onChange(controls.redraw);
gui.add(controls, "radiusMin", 1, 10).step(1).onChange(controls.redraw);
gui.add(controls, "radiusMax", 1, 30).step(1).onChange(controls.redraw);
gui.add(controls, "opacity", 0.1, 1).onChange(controls.redraw);
gui.add(controls, "glow", 0, 30).step(1).onChange(controls.redraw);
gui.addColor(controls, "color").onChange(controls.redraw);
gui.add(controls, "circleShape").onChange(controls.redraw);
gui.add(controls, "randomColor").onChange(controls.redraw);
gui.add(controls, "onChange_redraw").onChange(controls.redraw);

let prevx: number = ctx?.canvas.width ? ctx.canvas.width / 2 - 250 : 0;
let prevy: number = ctx?.canvas.height ? ctx.canvas.height / 8 : 0;

const prev2 = setInterval(preview, 16.67);

let increase: number = (Math.PI * 2) / 40;
let counter: number = 0;

function preview(): void {
  prevx += 8;
  prevy += (Math.sin(counter) / 2 + 0.5) * 8;
  emitDots(prevx, prevy);
  counter += increase;
}

preview();
setTimeout(() => clearInterval(prev2), 1000);

function emitDots(mx: number, my: number): void {
  for (let i = 0; i < emitRate; i++) {
    const rxv: number = Math.random() * 2 - 1;
    const ryv: number = Math.random() * 2 - 1;
    const col: string = color === "" ? `hsl(${Math.random() * 360},65%,65%)` : color;
    const rad: number = Math.random() * (maxRad - minRad) + minRad;
    dots.push({ x: mx, y: my, xv: rxv, yv: ryv, col: col, rad: rad });
  }
}

function animDots(): void {
  for (let i = 0; i < dots.length; i++) {
    dots[i].x += dots[i].xv * speed;
    dots[i].y += dots[i].yv * speed;

    ctx?.beginPath();
    ctx.fillStyle = dots[i].col;
    ctx.globalAlpha = opc;
    ctx.shadowColor = dots[i].col;
    ctx.shadowBlur = sha;
    if (roc === 0) {
      ctx.rect(dots[i].x, dots[i].y, dots[i].rad, dots[i].rad);
    } else {
      ctx.arc(dots[i].x, dots[i].y, dots[i].rad, 0, 2 * Math.PI);
    }
    ctx.fill();
    ctx.closePath();
  }
}

function cleanUp(): void {
  if (dots.length > 1) {
    dots.splice(0, Math.ceil(dots.length / lifeTime));
  }
}

function getFPS(): void {
  const tl: number = tn;
  tn = Date.now();
  const td: number = tn - tl;
  let fps: number = Math.round(1000 / td);
  fps = fps >= 58 ? 60 : fps;
  const fpse: HTMLElement | null = document.getElementById("fps");
  if (fpse) {
    fpse.innerHTML = `FPS: ${fps}`;
    fpse.style.color = `hsl(${fps * 2},100%,50%)`;
  }
}

function loop(): void {
  ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  document.onmousemove = function (e: MouseEvent) {
    const mx: number = e.clientX;
    const my: number = e.clientY;
    emitDots(mx, my);
  };

  document.ontouchmove = function (e: TouchEvent) {
    const mx: number = e.changedTouches[0].pageX;
    const my: number = e.changedTouches[0].pageY;
    emitDots(mx, my);
  };

  animDots();
  cleanUp();
  getFPS();
}

loop();
setInterval(loop, 16.67);
"use client";
import React, { useEffect, useRef } from "react";

// Constants
const PI = Math.PI;
const TAU = PI * 2;
const MAX_GALAXIES = 5; // Set the maximum number of galaxies

// Types
interface Mouse {
  pos: { x: number; y: number };
  speed: number;
}

interface Galaxy {
  x: number;
  y: number;
  stars: Star[];
  dust: Dust[];
  drag: number;
  angleOffsetX: number;
  angleOffsetY: number;
  realAngleOffsetX: number;
  realAngleOffsetY: number;
  color: { r: number; g: number; b: number };
  calculateCenter: () => void;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle?: number;
  distance?: number;
}

interface Dust {
  x: number;
  y: number;
  size: number;
  texture: HTMLCanvasElement;
  speed: number;
  angle?: number;
  distance?: number;
}

// Main Component
const GalaxyComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const mouse: Mouse = {
    pos: {
      x: typeof window !== "undefined" ? window.innerWidth * 0.5 : 0,
      y: typeof window !== "undefined" ? window.innerHeight * 0.5 : 0,
    },
    speed: 0,
  };

  const galaxies: Galaxy[] = [];
  let currentGalaxy: Galaxy | null = null;
  let drawingMode = false;

  // Initialize canvas
  const initCanvas = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (canvasRef.current) {
      canvasRef.current.width = w;
      canvasRef.current.height = h;
      ctx.current = canvasRef.current.getContext("2d");
    }
  };

  // Helper functions
  const r = () => Math.random();

  const angle2 = (p1: number[], p2: number[]): number => {
    return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
  };

  const distance2 = (p1: number[], p2: number[]): number => {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  };

  const createDustParticle = (color?: { r: number; g: number; b: number }): HTMLCanvasElement => {
    const canvas = document.createElement("canvas");
    const w = 100;
    const h = 100;
    const ctx = canvas.getContext("2d")!;

    canvas.width = w;
    canvas.height = h;

    const cx = w * 0.5;
    const cy = h * 0.5;

    const colorValue = color || {
      r: Math.round(150 + (r() * 100)),
      g: Math.round(50 + (r() * 100)),
      b: Math.round(50 + (r() * 100)),
    };

    ctx.fillStyle = `rgba(${colorValue.r},${colorValue.g},${colorValue.b},.02)`;

    Array.from(new Array(200)).forEach((_, i) => {
      const xRand = -5 + (r() * 10);
      const yRand = -5 + (r() * 10);
      const xRand2 = 10 + (r() * (cx / 2));
      const yRand2 = 10 + (r() * (cy / 2));

      const x = Math.cos((TAU / xRand / 200) * i) * (r() * xRand2) + cx;
      const y = Math.sin((TAU / yRand / 200) * i) * (r() * yRand2) + cy;

      ctx.beginPath();
      ctx.arc(x, y, r() * 4, 0, TAU);
      ctx.fill();
    });

    return canvas;
  };

  const createGalaxy = (x: number, y: number): Galaxy => ({
    x,
    y,
    stars: [],
    dust: [],
    drag: r() * 0.05,
    angleOffsetX: TAU * r(),
    angleOffsetY: TAU * r(),
    realAngleOffsetX: 0,
    realAngleOffsetY: 0,
    color: {
      r: Math.round(50 + r() * 100),
      g: Math.round(50 + r() * 100),
      b: Math.round(150 + r() * 100),
    },
    calculateCenter() {
      if (!this.stars.length) return;
      this.x = this.stars.reduce((acc, star) => acc + star.x, 0) / this.stars.length;
      this.y = this.stars.reduce((acc, star) => acc + star.y, 0) / this.stars.length;
    },
  });

  const createStar = (x: number, y: number, spread: number): Star => ({
    x: x + Math.cos(TAU * r()) * spread,
    y: y + Math.sin(TAU * r()) * spread,
    radius: r() + 0.25,
    speed: r(),
  });

  const createDust = (x: number, y: number, size: number): Dust => ({
    x,
    y,
    size,
    texture: createDustParticle(),
    speed: r(),
  });

  const updateStarDust = (s: Star | Dust, g: Galaxy) => {
    if (g === currentGalaxy && drawingMode) return;

    s.angle = s.angle || angle2([g.x, g.y], [s.x, s.y]);
    s.distance = s.distance || distance2([g.x, g.y], [s.x, s.y]);

    s.angle += (0.4 + s.speed * 0.1) / s.distance;

    s.x = g.x + Math.cos(s.angle + g.realAngleOffsetX) * s.distance;
    s.y = g.y + Math.sin(s.angle + g.realAngleOffsetY) * s.distance;
  };

  const update = () => {
    galaxies.forEach((g) => {
      if (g !== currentGalaxy) {
        g.realAngleOffsetX += g.realAngleOffsetX < g.angleOffsetX
          ? (g.angleOffsetX - g.realAngleOffsetX) * 0.05
          : 0;
        g.realAngleOffsetY += g.realAngleOffsetY < g.angleOffsetY
          ? (g.angleOffsetY - g.realAngleOffsetY) * 0.05
          : 0;
      }
      g.stars.forEach((s) => updateStarDust(s, g));
      g.dust.forEach((d) => updateStarDust(d, g));
    });
  };

  const render = () => {
    if (!ctx.current) return;

    ctx.current.globalCompositeOperation = "source-over";
    ctx.current.fillStyle = "rgba(0,0,0,.05)";
    ctx.current.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx.current.globalCompositeOperation = "lighter";

    ctx.current.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx.current.fillStyle = "#ffffff";
    ctx.current.strokeStyle = "rgba(255,255,255,.05)";
    
    galaxies.forEach(g => {
      g.stars.forEach(s => {
        ctx.current!.beginPath();
        ctx.current!.moveTo(s.x, s.y);
        ctx.current!.arc(s.x, s.y, s.radius, 0, TAU);
        ctx.current!.fill();
      });
      g.dust.forEach(d => {
        ctx.current!.drawImage(d.texture, d.x - (d.size * 0.5), d.y - (d.size * 0.5), d.size, d.size);
      });
    });

    if (drawingMode && currentGalaxy) {
      ctx.current.beginPath();
      currentGalaxy.stars.forEach(s => {
        ctx.current!.moveTo(s.x, s.y);
        ctx.current!.lineTo(currentGalaxy!.x, currentGalaxy!.y);
      });
      ctx.current.stroke();
    }
  };

  const draw = (e: MouseEvent) => {
    if (!drawingMode) return;

    const newStar = createStar(mouse.pos.x, mouse.pos.y, mouse.speed);
    currentGalaxy?.stars.push(newStar);
    
    if (mouse.speed * 1.5 > 13 && mouse.speed < 100) {
      currentGalaxy?.dust.push(
        createDust(
          (currentGalaxy.x + (Math.cos(TAU * r()) * mouse.speed * 0.1)),
          (currentGalaxy.y + (Math.sin(TAU * r()) * mouse.speed * 0.1)),
          mouse.speed * 1.5)
      );
    }

    currentGalaxy?.calculateCenter();
  };

  // Event handlers
  const activateDraw = (e: MouseEvent | TouchEvent) => {
    if (galaxies.length >= MAX_GALAXIES) galaxies.shift(); // Remove oldest galaxy if exceeding limit
    drawingMode = true;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
        if (e instanceof MouseEvent) {
            mouse.pos.x = e.clientX - rect.left;
            mouse.pos.y = e.clientY - rect.top;
        } else if (e instanceof TouchEvent && e.touches.length > 0) {
            mouse.pos.x = e.touches[0].clientX - rect.left;
            mouse.pos.y = e.touches[0].clientY - rect.top;
        }
    }

    currentGalaxy = createGalaxy(mouse.pos.x, mouse.pos.y);
    galaxies.push(currentGalaxy);
};


  const disableDraw = () => {
    drawingMode = false;
    currentGalaxy = null;
  };

  const moveEvent = (e: MouseEvent | TouchEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
        let newX: number, newY: number;

        if (e instanceof MouseEvent) {
            newX = e.clientX - rect.left;
            newY = e.clientY - rect.top;
        } else if (e instanceof TouchEvent && e.touches.length > 0) {
            newX = e.touches[0].clientX - rect.left;
            newY = e.touches[0].clientY - rect.top;
        } else {
            return; // Exit if event type is neither MouseEvent nor TouchEvent
        }

        mouse.speed = distance2([newX, newY], [mouse.pos.x, mouse.pos.y]);
        mouse.pos.x = newX;
        mouse.pos.y = newY;
        draw(e as MouseEvent); // `draw` expects MouseEvent, cast to avoid errors
    }
};

  const loop = () => {
    draw(new MouseEvent('mousemove', { clientX: mouse.pos.x, clientY: mouse.pos.y })); // Fake draw event
    update();
    render();
    window.requestAnimationFrame(loop);
};

  // Setup event listeners and canvas
  useEffect(() => {
    initCanvas();

    // Define exactly 1 galaxy
    const positions = [
      { x: window.innerWidth * 0.65, y: window.innerHeight * 0.55 },
    ];

    // Create one galaxy
    const galaxy = createGalaxy(positions[0].x, positions[0].y);
    for (let i = 0; i < 250; i++) {
      galaxy.stars.push(createStar(galaxy.x, galaxy.y, 200));
    }
    for (let i = 0; i < 20; i++) {
      galaxy.dust.push(createDust(galaxy.x, galaxy.y, 150));
    }
    galaxy.calculateCenter();
    galaxies.push(galaxy); // Push the single galaxy into the galaxies array
  
    loop(); // Start the animation loop
  
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.addEventListener("mousedown", activateDraw);
      canvasElement.addEventListener("mousemove", moveEvent);
      canvasElement.addEventListener("mouseup", disableDraw);
      canvasElement.addEventListener("touchstart", activateDraw);
      canvasElement.addEventListener("touchmove", moveEvent);
      canvasElement.addEventListener("touchend", disableDraw);
    }
  
    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("mousedown", activateDraw);
        canvasElement.removeEventListener("mousemove", moveEvent);
        canvasElement.removeEventListener("mouseup", disableDraw);
        canvasElement.removeEventListener("touchstart", activateDraw);
        canvasElement.removeEventListener("touchmove", moveEvent);
        canvasElement.removeEventListener("touchend", disableDraw);
      }
    };
  }, []);
  
  
  

  return (
    <>
      <canvas ref={canvasRef} />
      <div className="intro">
      </div>
      <style jsx>{`
        body {
          overflow: hidden;
        }
        canvas {
          background-color:#010f27;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          mix-blend-mode: screen;
        }
        .intro {
          position: absolute;
          z-index: 1;
          top: 20px;
          left: 20px;
          color: white;
          text-align: left;
        }
      `}</style>
    </>
  );
};

export default GalaxyComponent;
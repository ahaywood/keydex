import React, { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => void;
}

const Dust = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let circleArr: Circle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCircles();
    };

    const createCircle = (
      x: number,
      y: number,
      dx: number,
      dy: number,
      radius: number,
    ): Circle => ({
      x,
      y,
      dx,
      dy,
      radius,
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "rgba(255, 255, 255, .3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },
      update(ctx: CanvasRenderingContext2D, width: number, height: number) {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw(ctx);
      },
    });

    const initCircles = () => {
      circleArr = [];
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < 200; i++) {
        const radius = Math.random() * 3;
        const x = Math.random() * (width - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 0.25;
        const y = Math.random() * (height - radius * 2) + radius;
        const dy = (Math.random() - 0.5) * 0.5;

        circleArr.push(createCircle(x, y, dx, dy, radius));
      }
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update(ctx, canvas.width, canvas.height);
      }
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none w-full h-full absolute z-dust opacity-25 z-[var(--z-index-dust)]"
    />
  );
};

export { Dust };

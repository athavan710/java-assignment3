import { useEffect, useRef } from "react";

type GraphProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  root1: number | string;
  root2: number | string;
  root3: number | string;
};

export default function CubicGraph({ a, b, c, d, root1, root2, root3 }: GraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const centerX = w / 2;
    const centerY = h / 2;
    const scale = 30;

    ctx.clearRect(0, 0, w, h);


    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = -20; i <= 20; i++) {
      ctx.moveTo(centerX + i * scale, 0);
      ctx.lineTo(centerX + i * scale, h);

      ctx.moveTo(0, centerY + i * scale);
      ctx.lineTo(w, centerY + i * scale);
    }
    ctx.stroke();

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();

    ctx.moveTo(0, centerY); //x-axis
    ctx.lineTo(w, centerY);

    ctx.moveTo(centerX, 0); //y-axis
    ctx.lineTo(centerX, h);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2.5;

    let first = true;

    for (let x = -20; x <= 20; x += 0.01) {
      const y = a * x ** 3 + b * x ** 2 + c * x + d;
      const canvasX = centerX + x * scale;
      const canvasY = centerY - y * scale;

      if (first) {
        ctx.moveTo(canvasX, canvasY);
        first = false;
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }
    ctx.stroke();


    const drawRoot = (root: number | string) => {
      const value =
        typeof root === "string" ? parseFloat(root) : root;

      if (!isNaN(value) && isFinite(value)) { //checks if not a number and is a finite number
        ctx.beginPath();
        ctx.fillStyle = "#2563eb"; 
        ctx.arc(centerX + value * scale, centerY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    drawRoot(root1);
    drawRoot(root2);
    drawRoot(root3);

  }, [a, b, c, d, root1, root2, root3]);

  return (
    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl shadow-inner">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="bg-white border-2 border-slate-300 rounded-lg shadow-md"
      />
    </div>
  );
}
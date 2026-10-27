"use client";

import { useEffect, useRef } from "react";

interface RibbonFlowProps {
  lineCount?: number;
  speed?: number;
  className?: string;
  height?: number;
  colors?: unknown;
  segment?: [number, number];
  phase?: number;
}

const RibbonFlow = ({ lineCount = 70, speed = 1, className = "", height = 500, segment, phase = 0 }: RibbonFlowProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let V = 0;
    let s0 = 0;
    let grad: CanvasGradient | null = null;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      s0 = segment ? segment[0] : 0;
      const s1 = segment ? segment[1] : 1;
      const span = Math.max(0.001, s1 - s0);
      V = w / span;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, -s0 * V * dpr, 0);
      grad = ctx.createLinearGradient(0, 0, V, 0);
      grad.addColorStop(0, "rgba(232,160,160,0)");
      grad.addColorStop(0.12, "rgba(232,160,160,0.55)");
      grad.addColorStop(0.5, "rgba(192,91,224,0.9)");
      grad.addColorStop(0.68, "rgba(123,63,242,0.9)");
      grad.addColorStop(0.8, "rgba(61,79,237,0.85)");
      grad.addColorStop(1, "rgba(61,79,237,0)");
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const TAU = Math.PI * 2;
    const render = (ms: number) => {
      const s = (reduced ? 3 : (ms / 1000) * speed) + phase;
      const a1 = Math.sin((TAU * s) / 7);
      const a2 = Math.sin((TAU * s) / 6 + 1.3);
      const a3 = Math.sin((TAU * s) / 8 + 2.1);
      ctx.clearRect(0, 0, V, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 1;
      if (grad) ctx.strokeStyle = grad;

      const n = w < 768 ? Math.min(40, lineCount) : lineCount;
      const steps = 90;
      const maxFan = Math.min(350, h * 0.7);

      for (let i = 0; i < n; i++) {
        const t = n === 1 ? 0 : i / (n - 1);
        const linePhase = t * 0.9;
        ctx.beginPath();
        for (let k = 0; k <= steps; k++) {
          const p = k / steps;
          const vx = s0 * V + p * V;
          const u = vx / V;
          const arch = h * 0.66 - Math.sin(u * Math.PI) * h * (0.14 + 0.02 * a1);
          const f = u < 0.3 ? 0 : Math.pow((u - 0.3) / 0.7, 2);
          const top = arch - f * maxFan * (0.82 + 0.05 * a2);
          const bottom = arch + 13 + f * maxFan * (0.18 + 0.04 * a3);
          let y = top + (bottom - top) * t;
          y += Math.sin(t * Math.PI) * Math.sin(u * Math.PI * 1.6 + (TAU * s) / 8 + linePhase) * (4 + 14 * f);
          if (k === 0) ctx.moveTo(vx, y);
          else ctx.lineTo(vx, y);
        }
        ctx.globalAlpha = 1 - 0.67 * t;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (!reduced && !document.hidden) raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(render);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
    };
  }, [lineCount, speed, segment, phase]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block w-full ${className}`}
      style={{ height }}
    />
  );
};

export default RibbonFlow;

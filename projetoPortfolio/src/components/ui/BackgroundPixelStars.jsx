import React, { memo, useCallback, useEffect, useRef } from "react";

// Paleta de cores de 16 bits (opções de cores reduzidas)
const STAR_COLORS = [
  "#FFFFFF", // Branco
  "#FFFFAA", // Amarelo claro
  "#AAAAFF", // Azul claro
  "#FFAAAA", // Vermelho claro
  "#AAFFAA", // Verde claro
  "#FFAAFF", // Roxo claro
  "#AAFFFF", // Ciano claro
];

// Constantes de configuração
const starDensity = 0.00004; // Densidade reduzida para estrelas maiores
const twinkleProbability = 0.7;
const minTwinkleSpeed = 2;
const maxTwinkleSpeed = 4;
const pixelSize = 5;
const starRegenerationInterval = 5000; // Intervalo para regenerar estrelas (em ms)
const percentToRegenerate = 0.15; // Porcentagem de estrelas a serem regeneradas

// Configuração da estrela cadente
const shootingStarPixelSize = 2;
const targetFps = 16; // 16 FPS para dar aquela sensação retrô

export const BackgroundPixelStars = memo(() => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Referências de estado
  const backgroundStarsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const lastRenderTimeRef = useRef(0);
  const frameInterval = 1000 / targetFps;

  // Obtém um ponto inicial aleatório para as estrelas cadentes
  const getRandomStartPoint = useCallback(() => {
    const x = Math.random() * window.innerWidth;
    const angle = 45 + Math.random() * 90; // 45 a 135 graus
    return { x, y: 0, angle };
  }, []);

  // Cria uma nova estrela cadente
  const createNewShootingStar = useCallback(() => {
    const { x, y, angle } = getRandomStartPoint();
    return {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * 5 + 8,
      distance: 0,
      trail: [],
    };
  }, [getRandomStartPoint]);

  // Inicializa as estrelas de fundo
  const initBackgroundStars = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    backgroundStarsRef.current = [];

    const area = canvas.width * canvas.height;
    const numStars = Math.floor(area * starDensity);

    for (let i = 0; i < numStars; i++) {
      const shouldTwinkle = Math.random() < twinkleProbability;
      const gridX = Math.floor(Math.random() * (canvas.width / pixelSize)) * pixelSize;
      const gridY = Math.floor(Math.random() * (canvas.height / pixelSize)) * pixelSize;
      const colorIndex = Math.floor(Math.random() * STAR_COLORS.length);
      const baseOpacity = Math.random() * 0.5 + 0.5;

      backgroundStarsRef.current.push({
        x: gridX,
        y: gridY,
        color: STAR_COLORS[colorIndex],
        baseOpacity,
        currentOpacity: baseOpacity,
        twinkle: shouldTwinkle,
        twinkleSpeed: minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed),
        twinkleDirection: -1,
        twinkleTimer: 0,
      });
    }
  }, []);

  // Regenera uma parte das estrelas de fundo
  const regenerateBackgroundStars = useCallback(() => {
    if (!canvasRef.current || backgroundStarsRef.current.length === 0) return;

    const numToRegenerate = Math.max(1, Math.floor(backgroundStarsRef.current.length * percentToRegenerate));

    for (let i = 0; i < numToRegenerate; i++) {
      const randomIndex = Math.floor(Math.random() * backgroundStarsRef.current.length);
      const shouldTwinkle = Math.random() < twinkleProbability;
      const canvas = canvasRef.current;
      const gridX = Math.floor(Math.random() * (canvas.width / pixelSize)) * pixelSize;
      const gridY = Math.floor(Math.random() * (canvas.height / pixelSize)) * pixelSize;
      const colorIndex = Math.floor(Math.random() * STAR_COLORS.length);
      const baseOpacity = Math.random() * 0.5 + 0.5;

      backgroundStarsRef.current[randomIndex] = {
        x: gridX,
        y: gridY,
        color: STAR_COLORS[colorIndex],
        baseOpacity,
        currentOpacity: baseOpacity,
        twinkle: shouldTwinkle,
        twinkleSpeed: minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed),
        twinkleDirection: -1,
        twinkleTimer: 0,
      };
    }
  }, []);

  // Loop principal de animação
  const animateCanvas = useCallback(
    (timestamp) => {
      if (timestamp - lastRenderTimeRef.current < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animateCanvas);
        return;
      }

      lastRenderTimeRef.current = timestamp;

      if (!canvasRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateCanvas);
        return;
      }

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        animationFrameRef.current = requestAnimationFrame(animateCanvas);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Desenha e atualiza as estrelas de fundo
      backgroundStarsRef.current.forEach((star) => {
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.currentOpacity;
        ctx.fillRect(star.x, star.y, pixelSize, pixelSize);

        if (star.twinkle) {
          star.twinkleTimer += 1 / targetFps;

          if (star.twinkleTimer >= star.twinkleSpeed) {
            star.twinkleTimer = 0;
            star.twinkleDirection *= -1;
          }

          const progress = star.twinkleTimer / star.twinkleSpeed;
          if (progress < 0.5) {
            star.currentOpacity = star.twinkleDirection < 0 ? star.baseOpacity : star.baseOpacity * 0.3;
          } else {
            star.currentOpacity = star.twinkleDirection < 0 ? star.baseOpacity * 0.3 : star.baseOpacity;
          }
        }
      });

      // 2. Atualiza as estrelas cadentes
      if (shootingStarsRef.current.length) {
        shootingStarsRef.current = shootingStarsRef.current
          .map((star) => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;

            const newTrail = [...star.trail];

            if (newDistance % 8 < star.speed) {
              newTrail.push({
                x: star.x,
                y: star.y,
                opacity: 1.0,
              });
            }

            const updatedTrail = newTrail.map((point) => ({ ...point, opacity: point.opacity - 0.1 })).filter((point) => point.opacity > 0);

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              trail: updatedTrail,
            };
          })
          .filter((star) => star.x >= -30 && star.x <= window.innerWidth + 30 && star.y >= -30 && star.y <= window.innerHeight + 30);

        // 3. Desenha as estrelas cadentes
        shootingStarsRef.current.forEach((star) => {
          star.trail.forEach((point) => {
            ctx.save();
            ctx.translate(point.x, point.y);
            ctx.rotate((star.angle * Math.PI) / 180);
            ctx.translate(-point.x, -point.y);

            ctx.fillStyle = `rgba(180, 242, 255, ${point.opacity})`;
            ctx.fillRect(point.x, point.y, shootingStarPixelSize, shootingStarPixelSize);

            ctx.restore();
          });

          const starWidth = 4;
          const starHeight = 2;

          ctx.save();
          ctx.translate(star.x, star.y);
          ctx.rotate((star.angle * Math.PI) / 180);
          ctx.translate(-star.x, -star.y);

          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 1.0;

          for (let y = 0; y < starHeight; y++) {
            for (let x = 0; x < starWidth; x++) {
              if ((x === 0 && y === 1) || (x === 3 && y === 0)) continue;

              ctx.fillRect(
                star.x + x * shootingStarPixelSize,
                star.y + y * shootingStarPixelSize,
                shootingStarPixelSize,
                shootingStarPixelSize,
              );
            }
          }

          ctx.restore();
        });
      }

      animationFrameRef.current = requestAnimationFrame(animateCanvas);
    },
    [frameInterval],
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;

    initBackgroundStars();
    animationFrameRef.current = requestAnimationFrame(animateCanvas);

    const createShootingStar = () => {
      const newStar = createNewShootingStar();
      shootingStarsRef.current = [...shootingStarsRef.current, newStar];
      const randomDelay = Math.random() * 4000 + 2000;
      setTimeout(createShootingStar, randomDelay);
    };

    createShootingStar();

    const regenerationInterval = setInterval(regenerateBackgroundStars, starRegenerationInterval);

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        initBackgroundStars();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(regenerationInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [animateCanvas, createNewShootingStar, initBackgroundStars, regenerateBackgroundStars]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />;
});

export default BackgroundPixelStars;

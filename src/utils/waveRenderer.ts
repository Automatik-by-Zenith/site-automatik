// Paramètres d'animation des vagues
export interface WaveParams {
  speed: number;
  randomScale: number;
  randomFrequency: number;
  randomTimeSpeed: number;
}

// Paramètres d'une vague
export interface Wave {
  y: number;
  baseY: number;
  length: number;
  amplitude: number;
  baseAmplitude: number;
  amplitudeVariation: number;
  amplitudeSpeed: number;
  speed: number;
  opacity: number;
  phaseOffset: number;
  yVariationSpeed: number;
  yVariationAmount: number;
  lineWidth: number;
}

// Initialiser les vagues
export const initWaves = (width: number, height: number): Wave[] => {
  const waves: Wave[] = [];
  const numWaves = 18;
  let currentY = 0.1;

  for (let i = 0; i < numWaves; i++) {
    if (i > 0) {
      const spacingFactor = 1 - i / numWaves;
      const spacing = 0.03 + spacingFactor * 0.08;
      currentY += spacing;
    }

    const baseY = height * currentY;
    const lineWidths = [1, 2, 3];
    const lineWidth = lineWidths[i % 3];

    waves.push({
      y: baseY,
      baseY: baseY,
      length: 0.003 + (i % 3) * 0.002 + Math.random() * 0.001,
      amplitude: 35 + Math.random() * 20,
      baseAmplitude: 40,
      amplitudeVariation: 12 + Math.random() * 6,
      amplitudeSpeed: 0.0005 + i * 0.00008,
      speed: 0.0006 + (i % 3) * 0.0003 + Math.random() * 0.0002,
      opacity: 0.06 + Math.random() * 0.03,
      phaseOffset: (i / numWaves) * (Math.PI * 0.35),
      yVariationSpeed: 0.0002 + Math.random() * 0.0001,
      yVariationAmount: 12 + Math.random() * 8,
      lineWidth: lineWidth,
    });
  }

  return waves;
};

// Dessiner une vague sur le canvas
export const drawWave = (
  ctx: CanvasRenderingContext2D,
  wave: Wave,
  index: number,
  canvasWidth: number,
  canvasHeight: number,
  time: number,
  params: WaveParams,
  totalWaves: number
): void => {
  // Mettre à jour l'amplitude (breathing effect)
  wave.amplitude =
    wave.baseAmplitude +
    Math.sin(time * wave.amplitudeSpeed + wave.phaseOffset) * wave.amplitudeVariation;

  // Mettre à jour la position Y (ondulation verticale)
  wave.y = wave.baseY + Math.sin(time * wave.yVariationSpeed) * wave.yVariationAmount;

  // Créer le gradient
  const gradient = ctx.createLinearGradient(0, wave.y, 0, canvasHeight);
  const blueIntensity = 0.08 + (index / totalWaves) * 0.12;
  gradient.addColorStop(0, `rgba(214, 226, 245, ${blueIntensity})`);
  gradient.addColorStop(1, `rgba(240, 245, 255, ${blueIntensity * 0.4})`);

  // Dessiner le remplissage avec variation aléatoire
  ctx.beginPath();
  ctx.moveTo(0, wave.y);

  for (let x = 0; x <= canvasWidth; x += 2) {
    // Variation aléatoire basée sur la position X pour créer des crêtes irrégulières
    const randomVariation =
      Math.sin(x * params.randomFrequency + time * params.randomTimeSpeed) *
      params.randomScale;
    const y =
      wave.y +
      (Math.sin(x * wave.length + time * wave.speed + wave.phaseOffset) * wave.amplitude) +
      randomVariation;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvasWidth, canvasHeight);
  ctx.lineTo(0, canvasHeight);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Dessiner le trait avec variation aléatoire
  ctx.beginPath();
  ctx.moveTo(0, wave.y);

  for (let x = 0; x <= canvasWidth; x += 2) {
    // Même variation aléatoire que le remplissage
    const randomVariation =
      Math.sin(x * params.randomFrequency + time * params.randomTimeSpeed) *
      params.randomScale;
    const y =
      wave.y +
      (Math.sin(x * wave.length + time * wave.speed + wave.phaseOffset) * wave.amplitude) +
      randomVariation;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = `rgba(0, 113, 227, ${wave.opacity})`;
  ctx.lineWidth = wave.lineWidth;
  ctx.stroke();
};

import React, { useEffect, useRef } from 'react';

interface DotGridBackgroundProps {
    gridSpacing?: number;
    dotSize?: number;
    interactionRadius?: number;
    scaleMultiplier?: number;
    baseColorLight?: string;
    baseColorDark?: string;
    activeColorLight?: string;
    activeColorDark?: string;
}

export const DotGridBackground: React.FC<DotGridBackgroundProps> = ({
    gridSpacing = 32,
    dotSize = 2,
    interactionRadius = 100,
    scaleMultiplier = 1.5,
    baseColorLight = 'rgba(0, 0, 0, 0.05)', // Reduced from 0.1
    baseColorDark = 'rgba(255, 255, 255, 0.05)', // Reduced from 0.1
    activeColorLight = 'rgba(0, 113, 227, 0.2)', // Reduced from 0.3
    activeColorDark = 'rgba(41, 151, 255, 0.2)', // Reduced from 0.3
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let mouseX = -1000;
        let mouseY = -1000;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Check if dark mode is active to set base colors
            const isDark = document.documentElement.classList.contains('dark');
            const baseColor = isDark ? baseColorDark : baseColorLight;
            const activeColor = isDark ? activeColorDark : activeColorLight;

            for (let x = 0; x < width; x += gridSpacing) {
                for (let y = 0; y < height; y += gridSpacing) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let currentSize = dotSize;
                    let currentColor = baseColor;

                    if (distance < interactionRadius) {
                        const scale = 1 - distance / interactionRadius;
                        currentSize = dotSize + (scale * scaleMultiplier);
                        currentColor = activeColor;
                    }

                    ctx.fillStyle = currentColor;
                    ctx.beginPath();
                    ctx.arc(x, y, currentSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            requestAnimationFrame(draw);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [
        gridSpacing,
        dotSize,
        interactionRadius,
        scaleMultiplier,
        baseColorLight,
        baseColorDark,
        activeColorLight,
        activeColorDark
    ]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
        />
    );
};

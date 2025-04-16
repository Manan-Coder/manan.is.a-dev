import { useEffect, useState, useCallback, useRef } from "react";

interface Star {
  id: number;
  size: "small" | "medium" | "large";
  top: string;
  left: string;
  delay: string;
  opacity: number;
}

interface ShootingStar {
  id: number;
  top: string;
  left: string;
  duration: string;
  delay: string;
  length: number;
}

const SpaceBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const requestRef = useRef<number | null>(null);
  const constellationPoints = useRef<{x: number, y: number}[]>([]);

  const generateStars = useCallback(() => {
    const newStars: Star[] = [];
    const starSizes: ("small" | "medium" | "large")[] = ["small", "medium", "large"];
    
    for (let i = 0; i < 250; i++) {
      newStars.push({
        id: i,
        size: starSizes[Math.floor(Math.random() * starSizes.length)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.4 + 0.3 
      });
    }
    
    return newStars;
  }, []);

  const generateShootingStars = useCallback(() => {
    const newShootingStars: ShootingStar[] = [];
    
    for (let i = 0; i < 3; i++) {
      newShootingStars.push({
        id: i,
        top: `${Math.random() * 40}%`,
        left: `${Math.random() * 70}%`,
        duration: `${Math.random() * 2 + 2}s`,
        delay: `${Math.random() * 15 + 5}s`,
        length: Math.random() * 100 + 50
      });
    }
    
    return newShootingStars;
  }, []);

  const updateConstellations = useCallback(() => {
    if (constellationPoints.current.length > 10) {
      constellationPoints.current = constellationPoints.current.slice(-10);
    }
    
    requestRef.current = requestAnimationFrame(updateConstellations);
  }, []);

  useEffect(() => {
    setStars(generateStars());
    setShootingStars(generateShootingStars());
    
    requestRef.current = requestAnimationFrame(updateConstellations);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Add point to constellation trail
      if (Math.random() > 0.8) {
        constellationPoints.current.push({ x: e.clientX, y: e.clientY });
      }
      
      setMousePosition({ x, y });
      
      // Subtle parallax effect
      document.documentElement.style.setProperty('--mouse-x', `${x}`);
      document.documentElement.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const shootingStarInterval = setInterval(() => {
      setShootingStars(generateShootingStars());
    }, 10000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(shootingStarInterval);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [generateStars, generateShootingStars, updateConstellations]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark to-space-darker opacity-70"></div>
      
      {}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      {}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {constellationPoints.current.map((point, index) => {
          if (index === constellationPoints.current.length - 1) return null;
          const nextPoint = constellationPoints.current[index + 1];
          return (
            <line 
              key={index}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="0.5"
              strokeDasharray="2,3"
            />
          );
        })}
      </svg>
      
      {}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: '1px',
            height: '1px',
            boxShadow: `0 0 ${star.length}px 1px rgba(255, 255, 255, 0.8)`,
            transform: 'rotate(-45deg) translateX(0)',
            opacity: 0,
            animation: `shootingstar ${star.duration} ease-out ${star.delay} infinite`
          }}
        />
      ))}
      
      {}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star-${star.size}`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            opacity: star.opacity,
            transform: `
              translate(
                calc(var(--mouse-x, 0.5) * -15px), 
                calc(var(--mouse-y, 0.5) * -15px)
              ) 
              scale(${1 + Math.abs(0.5 - mousePosition.x) * 0.1})
            `,
            transition: 'transform 0.5s ease-out'
          }}
        />
      ))}

      {}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white bg-opacity-[0.01] blur-3xl"
        style={{
          transform: `
            translate(
              calc(var(--mouse-x, 0.5) * -20px), 
              calc(var(--mouse-y, 0.5) * -20px)
            )
          `,
          transition: 'transform 0.7s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-white bg-opacity-[0.005] blur-3xl"
        style={{
          transform: `
            translate(
              calc(var(--mouse-x, 0.5) * 20px), 
              calc(var(--mouse-y, 0.5) * 20px)
            )
          `,
          transition: 'transform 0.7s ease-out'
        }}
      ></div>
      
      {}
      <div 
        className="fixed w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)',
          left: `calc(${mousePosition.x * 100}% - 32px)`,
          top: `calc(${mousePosition.y * 100}% - 32px)`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      ></div>
    </div>
  );
};

export default SpaceBackground;
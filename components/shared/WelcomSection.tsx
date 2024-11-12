import React, { useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: any[] = [];
    const numParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1; 
        this.speedX = Math.random() * 3 - 1.5; 
        this.speedY = Math.random() * 3 - 1.5; 
        this.color = 'rgba(255, 255, 255, 0.5)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
        this.draw();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

interface WelcomeSectionProps {
  imageUrl: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ imageUrl }) => {
  return (
    <>
      <ParticleBackground /> 
      <section style={{ ...styles.section, backgroundImage: `url(${imageUrl})` }}>
        <div style={styles.overlay}>
          <h1 style={styles.text}>Добро пожаловать на мой портфолио</h1>
        </div>
      </section>
    </>
  );
};

const styles = {
  section: {
    position: 'relative' as 'relative',
    width: '100%',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden' as 'hidden',
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)', 
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    },
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))', 
    transition: 'background 0.5s ease-in-out',
  },
  text: {
    color: 'white',
    fontSize: '3rem', 
    fontWeight: 'bold' as 'bold',
    textShadow: '3px 3px 15px rgba(0, 0, 0, 0.5)',
    letterSpacing: '2px', 
    textAlign: 'center' as 'center',
    opacity: 1,
    animation: 'fadeIn 1s ease-out, scaleUp 1s ease-out',
  },
};
const globalStyles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleUp {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default WelcomeSection;

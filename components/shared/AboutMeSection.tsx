import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface AboutMeSectionProps {
  photoUrl: string;
  name: string;
  description: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ photoUrl, name, description }) => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 500], [0, -100]);
  const bgOffset = useTransform(scrollY, [0, 500], [0, -50]); 

  return (
    <section style={styles.section}>
      <motion.div style={{ ...styles.bgOverlay, y: bgOffset }} />
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        Обо мне
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        style={styles.content}
      >
        <motion.img
          src={photoUrl}
          alt="Моё фото"
          style={{ ...styles.photo, y: yOffset }}
          whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)' }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          style={styles.textContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
        >
          <h3 style={styles.name}>{name}</h3>
          <p style={styles.description}>{description}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(135deg, #121212, #3a3a3a)',
    color: 'white',
    padding: '3rem 1rem',
    textAlign: 'center' as 'center',
    borderTop: '4px solid #e91e63',
    position: 'relative' as 'relative',
    overflow: 'hidden',
  },
  bgOverlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(233,30,99,0.2), rgba(255,255,255,0.1))',
    zIndex: -1,
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#e91e63',
    transition: 'color 0.3s ease',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    flexDirection: 'row' as 'row',
  },
  photo: {
    width: '250px',
    height: '350px',
    objectFit: 'cover' as 'cover',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '4px solid #e91e63',
  },
  textContent: {
    maxWidth: '600px',
    textAlign: 'left' as 'left',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold' as 'bold',
    marginBottom: '1rem',
    color: '#ffffff',
    transition: 'color 0.3s ease',
  },
  description: {
    fontSize: '1.1rem',
    textAlign: 'justify' as 'justify',
    lineHeight: '1.6',
    color: '#bdbdbd',
    marginBottom: '2rem',
  },
};

export default AboutMeSection;

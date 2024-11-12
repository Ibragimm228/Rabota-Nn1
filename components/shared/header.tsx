'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const handleScroll = () => {
    const sections = ['about', 'works', 'contacts'];
    let foundSection = '';

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundSection = sectionId;
        }
      }
    });

    if (foundSection !== activeSection) {
      setActiveSection(foundSection);
    }
  };

  useEffect(() => {
    handleScroll(); 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <motion.span
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          PROWEB
        </motion.span>
      </div>
      <nav style={styles.nav}>
        <motion.button
          onClick={() => handleScrollToSection('about')}
          style={activeSection === 'about' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Обо мне
        </motion.button>
        <motion.button
          onClick={() => handleScrollToSection('works')}
          style={activeSection === 'works' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Мои работы
        </motion.button>
        <motion.button
          onClick={() => handleScrollToSection('contacts')}
          style={activeSection === 'contacts' ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Контакты
        </motion.button>
      </nav>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'black',
    color: 'white',
    borderBottom: '2px solid red',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    width: '100%',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
  },
  activeLink: {
    color: '#ff69b4',
    fontWeight: 'bold',
  },
};

export default Header;
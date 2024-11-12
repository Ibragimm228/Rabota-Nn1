import React, { useState } from 'react';
import { FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const ContactsSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Связаться со мной</h2>
      <div style={styles.iconsContainer}>
        {/* Иконка для Telegram */}
        <a
          href="https://t.me/prvtngn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.icon,
            ...(hovered === 'telegram' ? styles.iconHover : {}),
          }}
          onMouseEnter={() => setHovered('telegram')}
          onMouseLeave={() => setHovered(null)}
        >
          <FaTelegramPlane size={40} />
        </a>

        {/* Иконка для Email */}
        <a
          href="mailto:arimaxgn@gmail.com"
          style={{
            ...styles.icon,
            ...(hovered === 'email' ? styles.iconHover : {}),
          }}
          onMouseEnter={() => setHovered('email')}
          onMouseLeave={() => setHovered(null)}
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '3rem 1.5rem',
    textAlign: 'center' as 'center',
    borderTop: '2px solid #e63946',
    margin: '0',
    paddingBottom: '0',
    minHeight: 'auto',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold' as 'bold',
    marginBottom: '1.5rem',
    color: '#e63946',
    letterSpacing: '1px',
    fontFamily: 'Arial, sans-serif',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: '#333',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  iconHover: {
    transform: 'scale(1.2)',
    backgroundColor: '#e63946',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
  },
};

export default ContactsSection;

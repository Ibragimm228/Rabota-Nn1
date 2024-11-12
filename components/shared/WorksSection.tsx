import React from 'react';
import Link from 'next/link';
import { motion, useTransform, useScroll } from 'framer-motion';

interface WorkCardProps {
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  projectUrl: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ imageUrl, title, description, githubUrl, projectUrl }) => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -20]);

  return (
    <motion.div
      style={styles.card}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
        transition: { duration: 0.3 },
      }}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        style={{ ...styles.cardImage, y: yOffset }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h3
        style={styles.cardTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <motion.p
        style={styles.cardDescription}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {description}
      </motion.p>
      <div style={styles.buttonsContainer}>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            rotate: 3,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)' }}
        >
          <Link href={githubUrl} passHref>
            <button style={styles.button}>GitHub</button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            rotate: -3,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)' }}
        >
          <Link href={projectUrl} passHref>
            <button style={styles.button}>Проект</button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorksSection: React.FC = () => {
  const works = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1505275197/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D0%B0-%D1%84%D0%B0%D1%81%D1%82-%D1%84%D1%83%D0%B4-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=nVyo22cGhbNMmCZX37O_jlZNMouVWeRvkqW8rcC4uxQ=',
      title: 'Работа 1 | DB-burger',
      description: 'Магазин бургеров dBurger',
      githubUrl: 'https://github.com/Ibragimm228/DB-Burger',
      projectUrl: 'https://ibragimm228.github.io/DB-Burger/',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/2990/2990597.png',
      title: 'Работа 2 | Grayson',
      description: 'Магазин одежды Grayson',
      githubUrl: 'https://github.com/Ibragimm228/Grayson',
      projectUrl: 'https://ibragimm228.github.io/Grayson/',
    },
    {
      imageUrl: 'https://camatic.com/uk/wp-content/uploads/sites/2/2020/07/ProjectLogos-31.jpg',
      title: 'Работа 3 | Vue-Cinema',
      description: 'Сайт для просмотра фильмов',
      githubUrl: 'https://github.com/Ibragimm228/Vue-Cinema',
      projectUrl: 'https://ibragimm228.github.io/Vue-Cinema/',
    },
  ];

  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section style={styles.section}>
      <motion.div
        style={{ ...styles.background, y: yBackground }}
        className="parallax-background"
      />
      <h2 style={styles.heading}>Мои работы</h2>
      <div style={styles.cardsContainer}>
        {works.map((work, index) => (
          <WorkCard
            key={index}
            imageUrl={work.imageUrl}
            title={work.title}
            description={work.description}
            githubUrl={work.githubUrl}
            projectUrl={work.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#6a0dad',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '12px',
    padding: '1.5rem',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '12px 12px 0 0',
  },
  cardTitle: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  cardDescription: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    backgroundColor: '#8a2be2',
    color: 'white',
    padding: '0.6rem 1rem',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    minWidth: '120px',
  },
};

export default WorksSection;

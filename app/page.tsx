"use client";

import React from "react";
import AboutMeSection from "@/components/shared/AboutMeSection";
import Header from "@/components/shared/header";
import WorksSection from "@/components/shared/WorksSection";
import ContactsSection from "@/components/shared/ContactsSections";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <div style={styles.container}>
      <Header />
      <motion.div
        id="welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={styles.scrollDownIcon}
        >
          <FaChevronDown size={30} />
        </motion.div>
      </motion.div>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.section}
      >
        <AboutMeSection
          photoUrl="/Me.jpg" // исправлено на корневой путь
          name="Шамсуддинов Ибрагим"
          description="Junior Frontend разработчик с опытом работы с Next.js, JavaScript и TypeScript. Уверенно разрабатываю современные, отзывчивые и оптимизированные для производительности веб-приложения."
        />
      </motion.section>

      <motion.section
        id="works"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ ...styles.section, ...styles.worksSection }}
      >
        <WorksSection />
      </motion.section>

      <motion.section
        id="contacts"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ ...styles.section, ...styles.contactsSection }}
      >
        <ContactsSection />
      </motion.section>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #1a1a1a, #6a0dad)",
    color: "white",
    overflow: "hidden",
    fontFamily: "'Arial', sans-serif",
  },
  section: {
    padding: "4rem 2rem",
    borderBottom: "1px solid #444",
    textAlign: "center" as "center",
    transition: "all 0.3s ease",
  },
  scrollDownIcon: {
    marginTop: "1rem",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    color: "#fff",
  },
  worksSection: {
    background: "linear-gradient(135deg, #8a2be2, #6a0dad)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  contactsSection: {
    backgroundColor: "#111",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
};

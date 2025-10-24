import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard.jsx";
import { motion } from "framer-motion";
import { Download } from 'lucide-react';
import {Paintbrush,
  Workflow,
  Boxes,
  Wind,
  Globe,
  Figma,
  Monitor,
  Image,
  PenTool,
  Layout,
  BarChart3,
  Layers,
  Accessibility,
  Code,
  FileCode,
  Palette,
  Feather,
} from "lucide-react";

export default function Home() {
  const specializations = [
    { name: "UI Design Process", icon: <Paintbrush size={18} /> },
    { name: "UX Strategy", icon: <Workflow size={18} /> },
    { name: "Bootstrap", icon: <Boxes size={18} /> },
    { name: "Tailwind", icon: <Wind size={18} /> },
    { name: "WordPress (Elementor)", icon: <Globe size={18} /> },
    { name: "Figma", icon: <Figma size={18} /> },
    { name: "Responsive Design", icon: <Monitor size={18} /> },
    { name: "Adobe Photoshop", icon: <Image size={18} /> },
    { name: "Adobe Illustrator", icon: <PenTool size={18} /> },
    { name: "Webflow", icon: <Layout size={18} /> },
    { name: "Marketing Cloud", icon: <BarChart3 size={18} /> },
    { name: "Wireframing & Prototyping", icon: <Layers size={18} /> },
    { name: "WCAG Tools", icon: <Accessibility size={18} /> },
    { name: "Angular", icon: <Code size={18} /> },
    { name: "React", icon: <FileCode size={18} /> },
    { name: "HTML", icon: <Palette size={18} /> },
    { name: "CSS/SCSS", icon: <Feather size={18} /> },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero text-dark" style={{ minHeight: "90vh" }}>
        <div className="container pt-5 pb-4">
          <div className="hero-container">
            <div className="left">
              <h1 className="hero-title">
                Hi, I’m a product-focused <span>UI/UX Designer</span> building usable,
                delightful digital products.
              </h1>
              <p className="lead">
                Creative UI/UX Designer with 5+ years of experience designing
                user-centered, AI-enhanced digital experiences. I focus on
                accessibility, innovation, and simplicity to craft seamless
                interfaces.
              </p>
              <a href="/resume.pdf" className="btn btn-danger me-2 mt-3" download>
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="right">
              <div className="profile-img"></div>
            </div>
          </div>
        </div>

        {/* SINGLE INFINITE LOOP MARQUEE */}
        <div className="overflow-hidden py-4 text-dark">
          <motion.div
            className="d-flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            {specializations.concat(specializations).map((item, index) => (
              <motion.div
                key={index}
                className="d-flex align-items-center justify-content-center text-center rounded-lg border bg-light shadow-sm p-2 px-4 rounded"
                style={{ gap: "10px" }}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <span className="text-danger mr-1" style={{ lineHeight: "1" }}>
                  {item.icon}
                </span>
                <span className="small">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="case-study pt-5 pb-3">
        <div className="container">
          <div className="title-flex">
            <h2 className="text-dark">Featured Case Studies</h2>
            <Link to="/casemodel">
              View All Case Studies{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>

          <div className="study-row mb-5">
            {/* Alsco */}
            <div className="case-type">
              <Link to="/alsco" className="text-decoration-none text-dark card h-100 shadow-sm">
                <img src="/img/alsco-mockup.png" className="img-fluid" alt="Alsco" />
                <div className="card-body">
                  <h5 className="card-title">Alsco Uniforms Portal</h5>
                  <p className="card-text">
                    A B2B web platform for managing uniforms, supplies, and payments
                    with real-time analytics.
                  </p>
                </div>
              </Link>
            </div>

            {/* Moneyspot */}
            <div className="case-type">
              <Link to="/moneyspot" className="card h-100 shadow-sm text-decoration-none text-dark">
                <img src="/img/moneyspot-mockup.png" className="img-fluid" alt="Moneyspot" />
                <div className="card-body">
                  <h5 className="card-title">Moneyspot Loan Platform</h5>
                  <p className="card-text">
                    Designing a trusted online loan experience by creating transparency,
                    simplicity, and user-friendly processes through human-centered
                    design principles.
                  </p>
                </div>
              </Link>
            </div>

            {/* ClassCade */}
            <div className="case-type">
              <Link to="/classcade" className="card h-100 shadow-sm text-decoration-none text-dark">
                <img src="/img/classcade-mockup.png" className="img-fluid" alt="ClassCade" />
                <div className="card-body">
                  <h5 className="card-title">ClassCade UX Case Study</h5>
                  <p className="card-text">
                    Gamifying classrooms to engage students by turning achievements
                    into fun, interactive rewards that boost motivation.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12">
              <ContactCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

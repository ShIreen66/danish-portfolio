// pages/About.jsx
import React from 'react';
import {
  Paintbrush,
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
  Feather
} from 'lucide-react';

export default function About() {
  const specializations = [
    { name: 'UI Design Process', icon: <Paintbrush size={18} /> },
    { name: 'UX Strategy', icon: <Workflow size={18} /> },
    { name: 'Bootstrap', icon: <Boxes size={18} /> },
    { name: 'Tailwind', icon: <Wind size={18} /> },
    { name: 'WordPress (Elementor)', icon: <Globe size={18} /> },
    { name: 'Figma', icon: <Figma size={18} /> },
    { name: 'Responsive Design', icon: <Monitor size={18} /> },
    { name: 'Adobe Photoshop', icon: <Image size={18} /> },
    { name: 'Adobe Illustrator', icon: <PenTool size={18} /> },
    { name: 'Webflow', icon: <Layout size={18} /> },
    { name: 'Marketing Cloud', icon: <BarChart3 size={18} /> },
    { name: 'Wireframing & Prototyping', icon: <Layers size={18} /> },
    { name: 'WCAG Tools', icon: <Accessibility size={18} /> },
    { name: 'Angular', icon: <Code size={18} /> },
    { name: 'React', icon: <FileCode size={18} /> },
    { name: 'HTML', icon: <Palette size={18} /> },
    { name: 'CSS/SCSS', icon: <Feather size={18} /> },
  ];

  return (
    <>
      <section style={{ backgroundColor: '#3c2123' }}>
        <div className="container py-5">
          <h3 className='fw-bold text-center container p-0'>
            Creative UI/UX Designer | Interaction & Front-End Specialist with 5+ years of experience designing user-centered,
            AI-enhanced digital experiences.
          </h3>
        </div>
      </section>
      <section style={{ backgroundColor: '#ffd862' }}>
        <div className="container py-5 text-dark">
          <h3 className="mb-3">Specializations</h3>
          <div className="skill-card">
            {specializations.map((item, index) => (
                <div key={index} className="card-specialization">
                  <span className="text-danger">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section  style={{ backgroundColor: '#212121' }}>
        <div className="container text-light py-5">
          <h3 className='mb-3'>Experience</h3>
          <div className="d-flex">
            <div className="experience-container">
              <div className="exp-flex pb-3 mb-3">
                <h5 className="mb-0 text-uppercase fw-bold" style={{color: '#ffc107'}}>MindRuby Technologies</h5>
                <label className="fs-10 d-flex flex-column">(UI/UX Developer) <strong>Jun 2023 - Present</strong></label>
              </div>
              Designed AI-enhanced user interfaces, developed responsive web pages, implemented AI-driven personalization, and maintained scalable design systems.
            </div>
            <div className="experience-container">
              <div className="exp-flex pb-3 mb-3">
                <h5 className="mb-0 text-uppercase fw-bold" style={{color: '#ffc107'}}>SynQues</h5>
                <label className="fs-10 d-flex flex-column">(UI & Website Developer) <strong>Nov 2022 - May 2023</strong></label>
              </div>
              Designed user-friendly layouts, maintained design systems, conducted competitive analysis, and wrote front-end code.
            </div>
            <div className="experience-container">
              <div className="exp-flex pb-3 mb-3">
                <h5 className="mb-0 text-uppercase fw-bold" style={{color: '#ffc107'}}>Magnet Brains</h5>
                <label className="fs-10 d-flex flex-column">(Graphic Designer & UI/UX Designer) <strong>Jul 2020 - Oct 2022</strong></label>
              </div>
              Managed website, developed checkout pages, collaborated with stakeholders, and guided creative projects using WordPress, Adobe Photoshop, Illustrator, and Premiere Pro.
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#fff6db' }}>
        <div className="container text-dark py-5">
          <h3>Education</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
              BSc Computer Science - Barkatullah University, Bhopal</li>
            <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
              Polytechnic Diploma - S. V. Polytechnic College, Bhopal</li>
            <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
              High School - M.P. Board</li>
            <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
              Higher Secondary - M.P. Board</li>
          </ul>
        </div>
      </section>
    </>
  );
}

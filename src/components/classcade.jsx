import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Classcade() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  };

  const sections = [
    {
      title: 'Overview',
      text: 'ClassCade is a gamified rewards system that turns classroom achievements into fun. Students earn tokens, play mini-games, unlock digital prizes, and climb leaderboards, creating higher engagement and better academic outcomes.',
      img: './img/classcade-profile.png'
    },
    {
      title: 'Research & Insights',
      text: 'We interviewed teachers, students, and administrators. Insights revealed that visual rewards and instant feedback increase engagement, while teachers need quick, simple tools for awarding tokens.',
      img: 'https://via.placeholder.com/900x500?text=User+Research'
    },
    {
      title: 'Design Process',
      text: 'We followed a human-centered design process: empathize with teachers/students, define engagement gaps, ideate reward loops, prototype dashboards and student interfaces, and test usability in live classrooms.',
      img: 'https://via.placeholder.com/900x500?text=Wireframes+and+Flow'
    },
    {
      title: 'Key Features',
      text: 'Teacher dashboard for awarding tokens, Student portal to track rewards and play mini-games, Mini-Game arcade integrated with curriculum, leaderboards, and achievement badges.',
      img: 'https://via.placeholder.com/900x500?text=Key+Features+UI'
    },
    {
      title: 'Challenges & Solutions',
      text: 'Maintaining focus on learning over gaming, teacher time constraints, varying grade levels, and fairness on leaderboards were solved with adaptive game difficulty, quick token awarding, and effort-based leaderboards.',
      img: 'https://via.placeholder.com/900x500?text=Challenges+and+Solutions'
    },
    {
      title: 'Impact',
      text: 'Pilot tests in 3 schools showed +65% classroom participation, 40% fewer missed assignments, and 92% of students found learning more fun. Teacher usability rating: 4.8/5.',
      img: 'https://via.placeholder.com/900x500?text=Impact+and+Analytics'
    }
  ];

  return (
    <div className="bg-light text-dark min-vh-100">

      {/* Hero Section */}
      <section className="header-container">
        <motion.section initial="hidden" animate="visible" variants={fadeUp} className="container py-5">
        <h1 className="fs-5 fw-semibold w-100 text-center">ClassCade UX Case Study</h1>
        <motion.h2 className="fw-bold display-6" variants={fadeUp}>ClassCade – Gamified Classroom Experience</motion.h2>
        <motion.p className="text-muted fs-5" variants={fadeUp}>
          ClassCade is a game-based rewards platform that turns classroom achievements into fun. Students earn tokens from teachers and use them to play mini-games, unlock digital prizes, and climb leaderboards.
        </motion.p>
      </motion.section>
      </section>

      {/* Case Study Sections */}
       <div className="container my-5">

      {/* Role & Timeline */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3>My Role</h3>
          <p>Product Designer – Interaction Design, Visual Design, User Flows, Prototyping, Usability Testing</p>
        </div>
        <div className="col-md-6">
          <h3>Timeline</h3>
          <p>3 Design Sprints – May to September 2025</p>
          {/* May - Sep 2025 */}
        </div>
      </div>

      {/* Problem Space */}
      <div className="row mb-5">
        <div className="col">
          <h3>Problem Space</h3>
          <p>
            Teachers wanted a way to motivate students instantly and track classroom engagement. Students lacked a fun, reward-driven system to reinforce positive behaviors. Existing classroom reward methods were manual, delayed, or inconsistent. ClassCade needed a scalable system to support multiple classrooms, mini-games, and digital prizes. The goal was to create a digital arcade for classrooms that is fun, intuitive, and encourages continuous engagement.
          </p>
        </div>
      </div>

      {/* Design Principles */}
      <div className="row mb-5">
        <div className="col">
          <h3>Design Principles</h3>
          <ul>
            <li><strong>Instant Motivation:</strong> Students immediately see tokens, available games, and rewards.</li>
            <li><strong>Simplicity:</strong> Easy-to-use interface with minimal cognitive load.</li>
            <li><strong>Scalability:</strong> Ability to add new games, challenges, and prizes without clutter.</li>
            <li><strong>Teacher-Friendly:</strong> Quick overview of student progress, token distribution, and engagement metrics.</li>
          </ul>
        </div>
      </div>

      {/* Key Features & Flow */}
      <div className="row mb-5">
        <div className="col">
          <h3>Key Features & Flow</h3>
          <ul>
            <li><strong>Student Arcade Dashboard:</strong> Shows available games, token balance, and leaderboard.</li>
            <li><strong>Game Cards:</strong> Highlight game icon, token cost, play button, and optional rewards.</li>
            <li><strong>Rewards System:</strong> Students redeem tokens for digital prizes and achievements.</li>
            <li><strong>Leaderboards & Streaks:</strong> Encourage friendly competition and daily engagement.</li>
            <li><strong>Teacher Controls:</strong> Distribute tokens, view classroom activity, and set challenges.</li>
          </ul>
        </div>
      </div>

      {/* User Testing Insights */}
      <div className="row mb-5">
        <div className="col">
          <h3>User Testing Insights</h3>
          <ul>
            <li>Students responded positively to visual rewards and clear progress indicators.</li>
            <li>Teachers valued the ability to track engagement in real time.</li>
            <li>Feedback helped refine card layouts, token displays, and leaderboard clarity.</li>
          </ul>
        </div>
      </div>

      {/* Outcome */}
      <div className="row mb-5">
        <div className="col">
          <h3>Outcome</h3>
          <p>
            ClassCade is a first-of-its-kind gamified classroom platform that motivates students through instant rewards. It is scalable for future games, seasonal challenges, and digital prizes, and designed to improve academic engagement and classroom participation.
          </p>
        </div>
      </div>

      {/* Mockups / Placeholders */}
      <div className="row mb-5 case-study-row">
        <div className="col">
          <h3>Sneak Peek Shots</h3>
          <div className="row g-4">
            <div className="col-md-3 col-12">
              <div className="card text-center p-3">
                <img
                    src="/images/dashboard.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card text-center p-3">
                 <img
                    src="/images/dashboard1.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card text-center p-3">
                 <img
                    src="/images/dashboard2.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="card text-center p-3">
                 <img
                    src="/images/dashboard3.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer className="text-center border-top border-secondary-subtle py-4 mt-5 text-muted small">
        © {new Date().getFullYear()} Danish Khan — UX Case Study
      </footer>
    </div>
  );
}
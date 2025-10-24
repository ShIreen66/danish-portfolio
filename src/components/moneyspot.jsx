import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Moneyspot() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <div className="bg-light text-dark min-vh-100">
      {/* Hero Section */}
      <section className="header-container">
        <motion.section initial="hidden" animate="visible" variants={fadeUp} className="container py-5">
        <h1 className="fs-5 fw-semibold w-100 text-center">Moneyspot Loan Platform</h1>
        <motion.h2 className="fw-bold display-6" variants={fadeUp}>Designing a Trusted Online Loan Experience</motion.h2>
        <motion.p className="text-muted fs-5" variants={fadeUp}>
          MoneyPot is a fast, fully online loan provider that offers users quick access to cash while ensuring responsible lending. Applications take less than five minutes, and approved loans are usually deposited within an hour.
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
          <p>3 Design Sprints – August to November 2024</p>
          {/* Aug - Nov 2024 */}
        </div>
      </div>

      {/* Problem Space */}
      <div className="row mb-5">
        <div className="col">
          <h3>Problem Space</h3>
          <p>
            Users needed a **fast, reliable, and fully online loan experience**. The challenge was to simplify the application process, communicate eligibility criteria clearly, ensure secure data handling, and provide transparency in repayment obligations. Additionally, the platform had to accommodate users with imperfect credit histories while maintaining trust and responsible lending practices.
          </p>
        </div>
      </div>

      {/* Design Principles */}
      <div className="row mb-5">
        <div className="col">
          <h3>Design Principles</h3>
          <ul>
            <li><strong>Speed:</strong> Enable users to complete the application in under 5 minutes.</li>
            <li><strong>Clarity:</strong> Clearly communicate eligibility, repayment, and loan terms.</li>
            <li><strong>Trust:</strong> Provide transparency for responsible lending and user security.</li>
            <li><strong>Accessibility:</strong> Fully online and easy to use for all eligible users.</li>
          </ul>
        </div>
      </div>

      {/* Key Features */}
      <div className="row mb-5">
        <div className="col">
          <h3>Key Features</h3>
          <ul>
            <li><strong>Fast Loan Application:</strong> Complete in under 5 minutes with automated approval.</li>
            <li><strong>Eligibility Guidance:</strong> Clear criteria for age, residency, employment, and income.</li>
            <li><strong>Secure Client Area:</strong> Access loan status, balances, repayment dates, and apply for new loans.</li>
            <li><strong>Responsible Lending:</strong> Ensures affordability checks and fair evaluation for users with imperfect credit histories.</li>
            <li><strong>Customer Support:</strong> Assistance via chat, phone, or online client area.</li>
          </ul>
        </div>
      </div>

      {/* User Testing Insights */}
      <div className="row mb-5">
        <div className="col">
          <h3>User Testing Insights</h3>
          <ul>
            <li>Users appreciated the **speed and simplicity** of the application process.</li>
            <li>Clear eligibility criteria reduced confusion and improved trust.</li>
            <li>Secure client area and transparent repayment info enhanced confidence and usability.</li>
          </ul>
        </div>
      </div>

      {/* Outcome */}
      <div className="row mb-5">
        <div className="col">
          <h3>Outcome</h3>
          <p>
            The MoneyPot platform delivers a **fast, trustworthy, and fully online loan experience**. Users can quickly access loans, monitor repayments, and manage their finances responsibly. The design is scalable for future product features while maintaining clarity, trust, and ease of use.
          </p>
        </div>
      </div>

      {/* Mockups / Placeholders */}
      <div className="row mb-5 case-study-row">
        <div className="col">
          <h3>Sneak Peek Shots</h3>
          <div className="row g-4">
            <div className="col-md-4 col-12">
              <div className="card text-center p-3">
                <img
                    src="/images/application.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card text-center p-3">
                <img
                    src="/images/application1.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card text-center p-3">
                <img
                    src="/images/application2.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="card text-center p-3">
                <div style={{height:"150px", background:"#e9ecef"}}>Client Area Placeholder</div>
              </div>
            </div> */}
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
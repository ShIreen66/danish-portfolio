import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {uniform} from "../../public/images/uniforms.jpg";

export default function Alsco() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-light text-dark min-vh-100">
      {/* Hero Section */}
      <section className="header-container">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="container py-5"
        >
          <h1 className="fs-5 fw-semibold w-100 text-center">
            Alsco Uniforms – Digital Service Platform
          </h1>
          <motion.h2 className="fw-bold display-6" variants={fadeUp}>
            Designing a Smarter B2B Portal for Alsco Uniforms
          </motion.h2>
          <motion.p className="text-muted fs-5" variants={fadeUp}>
            Alsco Uniforms has evolved from a towel delivery and uniform rental
            business in Lincoln, Nebraska, into a comprehensive provider of
            uniforms, linens, and facility services. The platform helps
            businesses manage these services efficiently while emphasizing
            Alsco’s commitment to customer satisfaction.
          </motion.p>
        </motion.section>
      </section>

      {/* Case Study Sections */}
      <div className="container my-5">
        {/* Role & Timeline */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h3>My Role</h3>
            <p>
              Product Designer – Interaction Design, Visual Design, User Flows,
              Prototyping, Usability Testing
            </p>
          </div>
          <div className="col-md-6">
            <h3>Timeline</h3>
            <p>3 Design Sprints – January to March 2025</p>
            {/* Jan - March 2025 */}
          </div>
        </div>

        {/* Problem Space */}
        <div className="row mb-5">
          <div className="col">
            <h3>Problem Space</h3>
            <p>
              Alsco offers a wide range of services including uniforms, linens,
              floor care, washroom supplies, and first aid programs. The
              challenge was to organize this vast catalogue into a **clear,
              user-friendly interface** that allows businesses to quickly locate
              and understand services. Additionally, the platform needed to
              support **online account management** and future expansion without
              overwhelming the user.
            </p>
          </div>
        </div>

        {/* Design Principles */}
        <div className="row mb-5">
          <div className="col">
            <h3>Design Principles</h3>
            <ul>
              <li>
                <strong>Clarity:</strong> Organize services into intuitive
                categories so users can quickly find what they need.
              </li>
              <li>
                <strong>Scalability:</strong> Interface should handle expansion
                as new services are added.
              </li>
              <li>
                <strong>User-Centric:</strong> Highlight service benefits,
                features, and customer value.
              </li>
              <li>
                <strong>Professional Look & Feel:</strong> Maintain a clean and
                trustworthy visual style that aligns with Alsco’s brand
                heritage.
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="row mb-5">
          <div className="col">
            <h3>Key Features</h3>
            <ul>
              <li>
                <strong>Service Catalogue:</strong> Uniforms, linens, floor
                care, washroom supplies, and first aid programs organized for
                easy discovery.
              </li>
              <li>
                <strong>Service Details:</strong> Clear descriptions, features,
                and customer benefits for each offering.
              </li>
              <li>
                <strong>Online Account Management:</strong> Businesses can
                manage subscriptions, requests, and orders digitally.
              </li>
              <li>
                <strong>Scalable Design:</strong> Supports adding new services
                or features without clutter.
              </li>
              <li>
                <strong>Professional Branding:</strong> Consistent visual
                identity and user experience across all services.
              </li>
            </ul>
          </div>
        </div>

        {/* User Testing Insights */}
        <div className="row mb-5">
          <div className="col">
            <h3>User Testing Insights</h3>
            <ul>
              <li>
                Users appreciated the **clear categorization** of services and
                ability to navigate quickly.
              </li>
              <li>
                Highlighting **key service features** helped users understand
                benefits at a glance.
              </li>
              <li>
                Online account management simplified interaction with Alsco
                services.
              </li>
            </ul>
          </div>
        </div>

        {/* Outcome */}
        <div className="row mb-5">
          <div className="col">
            <h3>Outcome</h3>
            <p>
              The platform provides a **scalable, organized, and visually clear
              interface** for Alsco’s diverse service offerings. Businesses can
              efficiently browse and manage uniforms, linens, and facility
              services, while Alsco strengthens its reputation for reliability
              and customer satisfaction. The design is future-ready, supporting
              the addition of new services and features without disrupting
              usability.
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
                    src="/images/uniform.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="card text-center p-3">
                  <img
                    src="/images/uniform1.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="card text-center p-3">
                  <img
                    src="/images/uniform2.jpg"
                    style={{ background: "#e9ecef" }}
                    className="img-fluid"
                    alt="Uniform"
                  />
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="card text-center p-3">
                  <img
                    src="/images/uniform3.jpg"
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

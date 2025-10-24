import React from "react";
import caseStudiesData from "../data/caseStudiesData";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  return (
    <section className="case-study pt-5 pb-3" style={{minHeight:'calc(100vh - 62px)'}}>
      {/* case-study pt-5 pb-3" style={{minHeight:'calc(100vh - 62px)'}} */}
      <div className="container">
        <div className="title-flex">
          <h1 className="text-dark">All Case Studies</h1>
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

  );
}

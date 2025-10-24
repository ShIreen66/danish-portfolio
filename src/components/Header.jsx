// components/Header.jsx
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand text-danger fw-bold" to="/">Danish Khan</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isHome && <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>}
            <li className="nav-item"><Link className="nav-link" to="./about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="./CaseModel">Case Studies</Link></li>
          </ul>
          <div className="ms-3 d-flex">
            <a href="/resume.pdf" className="btn btn-danger me-2"><Download size={18} /> Download CV</a>
            {/* <a href="/cv.pdf" className="btn btn-danger me-2"><Download size={18} /> Download CV</a> */}
            {/* <NavLink to='/contact' className="btn btn-warning ">Hire Me</NavLink> */}
            {/* <a href="#contact" className="btn btn-warning" to="./ContactCard">Hire Me</a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
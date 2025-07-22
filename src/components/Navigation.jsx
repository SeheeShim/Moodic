import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="navigation-links">

          <div className="mobile-links">
            <Link to="/" className="nav-link brand">
              <div className="button-label">How nice</div>
            </Link>
            <Link to="/login" className="nav-link cta">
              <div className="button-label">Good to see you</div>
            </Link>
          </div>

          <div className="wrap-navigation-links">
            <Link to="/" className="nav-link brand mobile-hidden">
              <div className="button-label">MOODIC?</div>
            </Link>

            <Link to="/yellow" className="nav-link base">
              <div className="button-label">장르</div>
              <div className="nav-link-bg base"></div>
            </Link>

            <Link to="/blue" className="nav-link makes">
              <div className="button-label">Top100</div>
              <div className="nav-link-bg makes"></div>
            </Link>

            <Link to="/green" className="nav-link skills">
              <div className="button-label">MoodFlow</div>
              <div className="nav-link-bg skills"></div>
            </Link>

            <Link to="/pink" className="nav-link story">
              <div className="button-label">검색</div>
              <div className="nav-link-bg story"></div>
            </Link>

            <Link to="/red" className="nav-link signal">
              <div className="button-label">마이페이지</div>
              <div className="nav-link-bg signal"></div>
            </Link>

            <a
              href="../page/Login.jsx"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link cta mobile-hidden"
            >
              <div className="button-label">로그인</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

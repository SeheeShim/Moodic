import React from 'react';
import { Link } from 'react-router-dom';

/* import CountryChart from './page/CountryChart';
import Player from './components/Player';
import ScrollSection from './components/ScrollSection'; */
import './Navigation.scss';
/* import Home from '../page/Home';
import Genre from '../page/Genre'; */

const Navigation = () => {
  return (
    <div className="navigation">
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

            <Link to="/genre" className="nav-link base">
              <div className="button-label">장르</div>
              <div className="nav-link-bg base"></div>
            </Link>

            <Link to="/country-chart" className="nav-link makes">
              <div className="button-label">Top100</div>
              <div className="nav-link-bg makes"></div>
            </Link>

            <Link to="./Player" className="nav-link skills">
              <div className="button-label">MoodFlow</div>
              <div className="nav-link-bg skills"></div>
            </Link>

            <Link to="/pink" className="nav-link story">
              <div className="button-label">검색</div>
              <div className="nav-link-bg story"></div>
            </Link>

            <Link to="/player" className="nav-link signal">
              <div className="button-label">마이페이지</div>
              <div className="nav-link-bg signal"></div>
            </Link>

            <Link to='/login'
              className="nav-link cta mobile-hidden"
            >
              <div className="button-label">로그인</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
};


  

export default Navigation;

import React from 'react';
import PlayerData from '../data/PlayerData.js';
import './Player.scss';

const Player = () => {
  return (
    <section id="makes" className="section makes" style={{ backgroundColor: '#ebe8db', color: '#2a2119' }}>
      <div className="master-snap-sections">
        {PlayerData.map((sec, i) => (
          <div key={i} className={`master-snap-section _${i + 1}`}>
            <img src={sec.images[0]} alt="" className="image-cover" />

            <div className="snap-top-gradient">
              <div className="text-wrap-snap">
                <div className="label">{sec.label}</div>
                <div className="text-mask-snap">
                  <div className="text-snap-large first-layer">{sec.texts[0]}</div>
                  <div className="text-snap-large second-layer" style={{ opacity: 0 }}>
                    {sec.texts[1]}
                  </div>
                </div>
              </div>
            </div>

            <div className="snap-bottom-gradient">
              <div className="button-wrap-snap">
                <div className={`button-snap _${i + 1}`}>
                  <div className={`button-cirlce-wrap _${i + 1}`}>
                    <div className={`button-circle _${i + 1}`} style={{ backgroundColor: sec.buttonColor }} />
                  </div>
                  <div className={`button-hidden-text _${i + 1}`} style={{ opacity: 0 }}>
                    <div className="label">{sec.buttonLabelAlt || sec.buttonLabel}</div>
                  </div>
                  <div className={`button-visible-text _${i + 1}`} style={{ opacity: 1 }}>
                    <div className="label">{sec.buttonLabel}</div>
                  </div>
                </div>
                <div className="label">{sec.description}</div>
              </div>
            </div>

            <img src={sec.images[0]} alt="" className={`kid-visible _${i + 1}`} style={{ opacity: 1 }} />
            <img src={sec.images[1]} alt="" className={`kid-hidden _${i + 1}`} style={{ opacity: 0 }} />
            <div className="overlay-48"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Player;
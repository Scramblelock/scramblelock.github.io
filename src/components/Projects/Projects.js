import React from "react";
import "./Projects.css";
import krang from "./Images/krangfull.png";
import robot from "./Images/robofriends.png";
import hackthenews from "./Images/hackthenews.png";
import toronto from "./Images/toronto.png";
import huddle from "./Images/huddle.png";
import locking4life from "./Images/locking4life.png";
import nekofudo from "./Images/nekofudo.png";
import osheaga from "./Images/osheaga.png";
import zezin from "./Images/zezin.png";
import nasa from "./Images/nasa.png";
import crown from "./Images/crown.png";
import masscalc from "./Images/masscalc.png";

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='header'>Projects</div>
      <div className='projectGrid'>
        <div className='projectBox'>
          <a
            href='https://smart-brain-marc.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={krang} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Smart Brain</h3>
              <p>React + Node.js + PostgreSQL</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='http://18.191.226.60:8000/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={nasa} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>NASA Mission Control</h3>
              <p>Deno + EC2 + Docker</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://crwn-clothingltd.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={crown} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Crown Clothing</h3>
              <p>React + Redux + Firebase + Stripe</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://masscalcapp.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={masscalc} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Masscalc</h3>
              <p>React + Redux + Material UI + Jest</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://chingu-voyages.github.io/v10-geckos-team-02/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={nekofudo} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Neko Fudo</h3>
              <p>React + CSS (Group Project)</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://scramblelock.github.io/robofriends-redux-pwa/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={robot} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Robofriends</h3>
              <p>React + Redux</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://scramblelock.github.io/hack-the-news/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={hackthenews} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Hack The News</h3>
              <p>React + Axios</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://fierce-escarpment-13373.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={osheaga} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Osheaga Trip Planner</h3>
              <p>React + Axios + i18next</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://scramblelock.github.io/toronto-waste-lookup/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={toronto} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Toronto Waste Lookup</h3>
              <p>React</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://scramblelock.github.io/coding_challenge_11/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={huddle} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Huddle</h3>
              <p>HTML + CSS + Bootstrap</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://cafezezin.ca'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={zezin} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Cafe Zezin</h3>
              <p>Wordpress + HTML + CSS</p>
            </div>
          </a>
        </div>
        <div className='projectBox'>
          <a
            href='https://scramblelock.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contentOverlay' />
            <img className='contentImage' src={locking4life} alt='' />
            <div className='contentDetails fadeInBottom'>
              <h3>Scramblelock</h3>
              <p>Wordpress + HTML + CSS</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

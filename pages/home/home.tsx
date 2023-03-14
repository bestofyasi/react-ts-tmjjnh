import * as React from 'react';
import './home.scss';
import { motion } from 'framer-motion';

//images
let imgs = [
  'https://images.unsplash.com/photo-1672026231903-cc8a1d49e5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80',
  'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
  'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
];
import ArrowRight from './../../assets/images/arrow-right.svg';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1 className="mast-head">
          Humanize <br /> the design.
        </h1>
        <p className="body">
          A <span className="secondary-bold-text">UX/UI</span> &
          <span className="secondary-bold-text"> Interaction</span> Designer
          based in <span className="line-through-text">Sri Lanka</span>{' '}
          Singapore. I'm passionate about working on complex problems and
          crafting joyful environments with holistic thinking.
        </p>
        <a href="" className="cta">
          See my work
        </a>
      </section>

      <section className="me">
        <div className="img-wrapper">
          <img src={imgs[2]} alt="" />
        </div>
      </section>

      <section className="case-study-preview">
        <div className="titles-center">
          <p className="">Featured Work</p>
          <h2 className="head">
            The work I do, <br /> and business I help.
          </h2>
        </div>
        <div className="card-image img-left">
          <div className="cover-image">
            <img src={imgs[1]} alt="" />
            <div className="dymanic-shadow-1"></div>
          </div>
          <div className="copy">
            <p className="title">News & Media</p>
            <h1 className="heading">VICE made reviews 70% faster.</h1>
            <p className="body">
              AI transcription tools connected to the Frame.io API drove massive
              gains in productivity at VICE Media.
            </p>
            <a className="link-animated-arrow" href="">
              <span className="the-arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main">
                <span className="text">View case</span>
                <span className="the-arrow -right"></span>
              </span>
            </a>
          </div>
        </div>
        <div className="card-image img-right">
          <div className="cover-image">
            <img src={imgs[3]} alt="" />
          </div>
          <div className="copy">
            <p className="title">News & Media</p>
            <h1 className="heading">VICE made reviews 70% faster.</h1>
            <p className="body">
              AI transcription tools connected to the Frame.io API drove massive
              gains in productivity at VICE Media.
            </p>
            <a className="link-animated-arrow" href="">
              <span className="the-arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main">
                <span className="text">View case</span>
                <span className="the-arrow -right"></span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="works">
        <h2 className="home-page-titles">
          The work I do, and business I help.
        </h2>
      </section>
    </div>
  );
}

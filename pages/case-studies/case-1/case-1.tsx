import * as React from 'react';
import './../case-studies.scss';
import { motion } from 'framer-motion';

import Logo from './../../../assets/images/logo-white.svg';
//images
let imgs = [
  'https://images.unsplash.com/photo-1672026231903-cc8a1d49e5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80',
  'https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
  'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
  'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2101&q=80',
  'https://images.unsplash.com/photo-1552793494-111afe03d0ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
];
export default function Case1() {
  return (
    <div>
      {/* hero  */}
      <section className="case-hero">
        <div className="hero-content">
          <p className="title">Case study</p>
          <h1>Hello hello hello</h1>
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="img-wrapper">
          <img src={imgs[4]} alt="" />
        </div>
      </section>

      {/* case study intro - problem statement  */}
      <section className="case-intro">
        <div className="wrapper">
          <div className="left-bar">
            <div className="company-info">
              <img src={Logo} alt="Logo" />
              <p className="">
                VICE Media is the largest independent youth media company in the
                world, with
              </p>
            </div>
            <div className="properties">
              <div className="property">
                <p className="title">Length</p>
                <p className="body">12 Weeks / 2020</p>
              </div>
              <div className="property">
                <p className="title">Responsibilities</p>
                <p className="body">
                  User Research, UX design: Wire-framing, Prototyping, UI design
                  + Iterations
                </p>
              </div>
              <div className="property">
                <p className="title">Tools</p>
                <p className="body">
                  Miro, Figma, Illustrator, Photoshop, After Effects, Lottie
                </p>
              </div>
            </div>
          </div>

          <div className="right-pannel">
            <p className="heading">
              Oh no! A Sky-High Number of Inactive KrisFlyer Members! Oh no! A
              Sky-High Number of Inactive KrisFlyer Members!Oh no! A Sky-High
              Number of Inactive KrisFlyer Members!
            </p>

            <div className="prob-statement">
              <div className="properties">
                <div className="property">
                  <p className="title">Problem</p>
                  <p className="body">
                    As a college student, I’ve noticed how many of my peers I
                    were able to persevere towards our academic pursuits. Yet,
                    we have failed to accomplish our personal goals. This
                    sparked the question- why was there this disconnect in our
                    lives?
                  </p>
                </div>
              </div>
              <div className="properties">
                <div className="property">
                  <p className="title">Problem</p>
                  <p className="body">
                    As a college student, I’ve noticed how many of my peers I
                    were able to persevere towards our academic pursuits. Yet,
                    we have failed to accomplish our personal goals. This
                    sparked the question- why was there this disconnect in our
                    lives?
                  </p>
                </div>
              </div>
              <div className="properties">
                <div className="property">
                  <p className="title">Problem</p>
                  <p className="body">
                    As a college student, I’ve noticed how many of my peers I
                    were able to persevere towards our academic pursuits. Yet,
                    we have failed to accomplish our personal goals. This
                    sparked the question- why was there this disconnect in our
                    lives?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* full width image */}
      <section className="full-width-img">
        <div className="img-wrapper">
          <img src={imgs[5]} alt="" />
        </div>
      </section>

      {/* project-content-left */}
      <section className="project-content-left">
        <p className="blue">Review and approvals</p>
        <h2>Keep everyone on the same page.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* img-with-2-para */}
      <section className="img-with-2-para">
        <div className="img-wrapper">
          <img src={imgs[6]} alt="" />
        </div>
        <div className="content">
          <h4 className="title">
            Write feedback right on a frame. Or draw it.
          </h4>
          <p className="body">
            Frame-accurate comments leave little room for misinterpretation. And
            when words aren’t enough, you can draw on a frame to illustrate
            exactly what you mean.
          </p>
        </div>
      </section>

      {/* project-content-center */}
      <section className="project-content-center">
        <p className="blue">Review and approvals</p>
        <h2>Keep everyone on the same page.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section>
        {/* project-side-by-side-cards */}
        <div className="cards-side-by right-img">
          <div className="content-left">
            <h4 className="title">
              Write feedback right on a frame. Or draw it.
            </h4>
            <p className="body">
              Frame-accurate comments leave little room for misinterpretation.
              And when words aren’t enough, you can draw on a frame to
              illustrate exactly what you mean.
            </p>
          </div>
          <div className="img-wrapper">
            <img src={imgs[3]} alt="" />
          </div>
        </div>
        {/* left image */}
        <div className="cards-side-by left-img">
          <div className="content-right">
            <h4 className="title">
              Write feedback right on a frame. Or draw it.
            </h4>
            <p className="body">
              Frame-accurate comments leave little room for misinterpretation.
              And when words aren’t enough, you can draw on a frame to
              illustrate exactly what you mean.
            </p>
          </div>
          <div className="img-wrapper">
            <img src={imgs[3]} alt="" />
          </div>
        </div>

        {/* Cards side full right image */}
        <div className="card-side-full card-side-full-left-img">
          <div className="img-wrapper">
            <img src={imgs[3]} alt="" />
          </div>
          <div className="content-left">
            <h4 className="title">
              Write feedback right on aaaa frame. Or draw it.
            </h4>
            <p className="body">
              Frame-accurate comments leave little room for misinterpretation.
              And when words aren’t enough, you can draw on a frame to
              illustrate exactly what you mean.
            </p>
          </div>
        </div>

        {/* left image */}
        <div className="card-side-full card-side-full-right-img">
          <div className="content-right">
            <h4 className="title">
              Write feedback right on a frame. Or draw it.
            </h4>
            <p className="body">
              Frame-accurate comments leave little room for misinterpretation.
              And when words aren’t enough, you can draw on a frame to
              illustrate exactly what you mean.
            </p>
          </div>
          <div className="img-wrapper">
            <img src={imgs[3]} alt="" />
          </div>
        </div>

        {/* single content*/}
        <div className="cards-side-multiple-content">
          <div className="img-wrapper-single">
            <img src={imgs[5]} alt="" />
          </div>
          <div className="content-multiple">
            <div className="content">
              <h4 className="title">
                Write feedback right on a frame. Or draw it.
              </h4>
              <p className="body">
                Frame-accurate comments leave little room for misinterpretation.
                And when words aren’t enough, you can draw on a frame to
                illustrate exactly what you mean.
              </p>
            </div>
          </div>
        </div>

        {/* multiple content*/}
        <div className="cards-side-multiple-content">
          <div className="img-wrapper-multiple">
            <img src={imgs[5]} alt="" />
          </div>
          <div className="content-multiple">
            <div className="content">
              <h4 className="title">
                Write feedback right on a frame. Or draw it.
              </h4>
              <p className="body">
                Frame-accurate comments leave little room for misinterpretation.
                And when words aren’t enough, you can draw on a frame to
                illustrate exactly what you mean.
              </p>
            </div>
            <div className="content">
              <h4 className="title">
                Write feedback right on a frame. Or draw it.
              </h4>
              <p className="body">
                Frame-accurate comments leave little room for misinterpretation.
                And when words aren’t enough, you can draw on a frame to
                illustrate exactly what you mean.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="wrapper">
          <div className="content">
            <h4 className="title">
              Write feedback right on a frame. Or draw it.
            </h4>

            <p className="body">
              Frame-accurate comments leave little room for misinterpretation.
              And when words aren’t enough, you can draw on a frame to
              illustrate exactly what you mean.
            </p>
          </div>
          <img className="image-1" src={imgs[4]} alt="" />
        </div>

        <div className="images">
          <img className="image-1" src={imgs[4]} alt="" />
          <img className="image-2" src={imgs[5]} alt="" />
          <img className="image-3 vertical" src={imgs[3]} alt="" />
          <img className="image-3 vertical" src={imgs[3]} alt="" />
          <img className="image-4" src={imgs[4]} alt="" />
          <img className="image-8" src={imgs[4]} alt="" />

          <img className="image-5 " src={imgs[4]} alt="" />
          <img className="image-6" src={imgs[4]} alt="" />
          <img className="image-7 " src={imgs[2]} alt="" />
          <img className="image-9 " src={imgs[4]} alt="" />
        </div>
      </section>

      {/* project-content-center */}
      <section className="project-content-center">
        <p className="blue">Review and approvals</p>
        <h2>Keep everyone on the same page.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </div>
  );
}

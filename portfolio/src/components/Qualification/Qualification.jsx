import React, { useState } from "react";
import "./qual.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="qual__container container">
        {/* Tabs */}
        <div className="qual__tabs">
          <div
            className={
              toggleState === 1
                ? "qual__button qual__active button--flex"
                : "qual__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qual__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qual__button qual__active button--flex"
                : "qual__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qual__icon"></i> Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qual__section">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">Web Design</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-present
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">Art</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-present
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">Web Development</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-present
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">UI/UX</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-present
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">Frontend Developer</h3>
                <span className="qual__subtitle">Company</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">Backend Developer</h3>
                <span className="qual__subtitle">Company</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-2021
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">UI Designer</h3>
                <span className="qual__subtitle">Freelance</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2020
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

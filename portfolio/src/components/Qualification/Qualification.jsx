import React from "react";
import "./qual.css";

const Qualification = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="qual__container container">
        <div className="qual__tabs">
          <div className="qual__button qual__active button--flex">
            <i className="uil uil-graduation-cap qual__icon"></i>Education
          </div>

          <div className="qual__button button--flex">
            <i className="uil uil-briefcase-alt qual__icon"></i>Experience
          </div>
        </div>

        <div className="qual__section">
          <div className="qual__content">
            <div className="qual__data">
              <div>
                <h3 className="qual__title">Web Design</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
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
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">Web Developement</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
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
                <h3 className="qual__title">Ui/Ux</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
                </div>
              </div>
            </div>
          </div>


          <div className="qual__content">
            <div className="qual__data">
              <div>
                <h3 className="qual__title">Web Design</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
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
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">Web Developement</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
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
                <h3 className="qual__title">Ui/Ux</h3>
                <span className="qual__subtitle">Institute</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt">2022-present</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React from 'react';
import './Landing_page.css';
import img_ellipse_468 from "./assets/img_ellipse_468.png";
import img_group_1 from "./assets/img_group_1.svg"
import img_analog_landscap from "./assets/img_analog_landscap.png"
import img_happy_asian_man from "./assets/img_happy_asian_man.png"
import img_contrast from "./assets/img_contrast.svg"
import img_man_safety_equipment_work from "./assets/img_man_safety_equipment_work.png"
import img_success from "./assets/img_success.svg"
import img_header_logo from "./assets/img_header_logo.svg"
import img_woman_hands_hol from "./assets/img_woman_hands_hol.png"
import img_overflow_menu from "./assets/img_overflow_menu.svg"
import img_success_teal_900 from "./assets/img_success_teal_900.svg";
import img_close from "./assets/img_close.svg";
import img_image_64 from "./assets/img_image_64.png";
import img_image_54 from "./assets/img_image_54.png";
import img_trending_up from "./assets/img_trending_up.svg";
import img_image_62_1_2 from "./assets/img_image_62_1_2.png";
import img_image_55 from "./assets/img_image_55.png";
import img_whatsapp_image_2023_10_06 from "./assets/img_whatsapp_image_2023_10_06.png";
import img_image_59 from "./assets/img_image_59.png";





const Landing_page = () => {
  return (
    <>
    {/* <!-- main content section --> */}
    
      <div className="main-layout">
        {/* <!-- hero banner section --> */}
        <div className="primary-column">
          <div className="feature-row" style={{marginTop:'20px'}}>
            <div className="whatsapp-column">
              <h1 className="section__title ui heading size-heading3xl">
                WhatsApp Learning to Transform your<br />Delivery Workforce
              </h1>
              <p className="section__subtitle ui text size-textxl">
                Unlock their True Potential with AI-Driven Vernacular Training Content and WhatsApp learning.
              </p>
              <div className="cta-row">
                <button className="section__button--primary ui button blue_a700 size-xs fill">Try chaabi for Free</button>
                <button className="section__button--secondary ui button white_a700 size-xs fill">View Demo</button>
              </div>
            </div>
            <div className="image-stack">
              <img src={img_ellipse_468} alt="Hero Image" className="section__image--featured" />
              <div className="view-row">
                <div className="section__view--default"></div>
                <div className="section__view--alternate"></div>
              </div>
              <div className="section__view--additional"></div>
              <div className="content-row">
                <div className="success-column">
                  <img src={img_group_1} alt="Success Image" className="section__image--thumbnail" />
                  <div className="analog-landscape-row">
                    <div className="contrast-stack">
                      <div className="analog-landscape-column">
                        <div className="analog-landscape-stack">
                          <img
                            src={img_analog_landscap}
                            alt="Analog Landscape Image"
                            className="section__image--landscape"
                          />
                          <img
                            src={img_happy_asian_man}
                            alt="Happy Asian Man Image"
                            className="section__image--portrait"
                          />
                        </div>
                      </div>
                      <div className="contrast-column">
                        <div className="contrast-row">
                          <img
                            src={img_contrast}
                            alt="Contrast Image"
                            className="section__image--contrast"
                          />
                          <h2 className="section__text--intro-1 ui heading size-texts">Introduction to vehicle training</h2>
                        </div>
                        <img
                          src={img_man_safety_equipment_work}
                          alt="Safety Equipment Image"
                          className="section__image--safety"
                        />
                      </div>
                      <div className="success-row">
                        <img
                          src={img_success}
                          alt="Success Image One"
                          className="section__image--success"
                        />
                        <h3 className="section__text--reduced-1 ui heading size-texts">Reduced Delivery Time</h3>
                      </div>
                    </div>
                    <img src={img_group_1} alt="Group Image Two" className="section__image--group" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- navigation header section --> */}
          <header className="header">
            <img src={img_header_logo} alt="Logo Image" className="header__logo" />
            <ul className="header__menu">
              <li>
                <a href="#">
                  <p className="ui text size-textlg">Features</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="ui text size-textlg">Testimonials</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h6 className="header__menu-item--trial ui heading size-headingxs">Start Free Trial</h6>
                </a>
              </li>
            </ul>
          </header>
        </div>

        {/* <!-- features overview section --> */}
        <div className="section-row">
          <div className="content-row-four">
            <div className="content-row-three">
              <div className="content-row-close">
                <div className="tailor-courses-stack">
                  <div className="tailor-courses-row">
                    <div className="tailor-courses-text-row">
                      <h2 className="section__text--highlight ui heading size-headingmd">
                        Tailor Courses <br />for star professionals
                      </h2>
                    </div>
                    <div className="woman-hands-row">
                      <img
                        src={img_woman_hands_hol}
                        alt="Woman Hands Image"
                        className="section__image--hands"
                      />
                      <div className="overflow-menu-row">
                        <img
                          src={img_overflow_menu}
                          alt="Overflow Menu Image"
                          className="section__image--menu"
                        />
                        <h3 className="section__text--intro ui heading size-textxs">Introduction to vehicle training</h3>
                      </div>
                    </div>
                  </div>
                  <div className="success-row-two">
                    <img
                      src={img_success_teal_900}
                      alt="Success Teal Image"
                      className="section__image--teal"
                    />
                    <h4 className="section__text--reduced ui heading size-textmd">Reduced Delivery Time</h4>
                  </div>
                  <img src={img_close} alt="Close Image" className="section__image--close" />
                </div>
                <div className="whatsapp-column-one">
                  <h5 className="section__text--whatsapp ui heading size-heading2xl">WhatsApp Learning</h5>
                  <p className="section__text--elevate ui text size-textxl">
                    Elevate your skills with our immersive and engaging learning content available right on WhatsApp.
                  </p>
                </div>
              </div>
              <div className="analytics-row">
                <div className="analytics-row-inner">
                  <div className="analytics-column">
                    <h6 className="section__text--analytics ui heading size-headinglg">Analytics</h6>
                  </div>
                  <div className="smart-enrollment-column">
                    <h3 className="section__text--enrollment ui heading size-headinglg">Smart Enrollment</h3>
                  </div>
                </div>
                <div className="gamified-row">
                  <div className="gamified-column">
                    <h3 className="section__text--gamified ui heading size-headinglg">Gamified Platform</h3>
                  </div>
                  <div className="vernacular-column">
                    <h3 className="section__text--vernacular ui heading size-headinglg">Vernacular Content</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- testimonials section --> */}
        <div className="trending-stack">
          <div className="description-row">
            <div className="description-row-inner">
              <div className="image-column">
                <img src={img_image_64} alt="Image Sixty Four" className="section__image--64" />
              </div>
              <div className="column-one">
                <img src={img_image_54} alt="Image Fifty Four" className="section__image--54" />
                <div className="trending-column">
                  <div className="trending-row">
                    <button className="section__icon--trending ui button white_a700_cc size-sm fill round">
                      <img src={img_trending_up}/>
                    </button>
                    <div className="improvement-column">
                      <h2 className="section__text--improvement ui heading size-headingxl">32% improvement</h2>
                      <h3 className="section__text--satisfaction ui heading size-headings">
                        in Customer Satisfaction & NPS
                      </h3>
                    </div>
                  </div>
                  <div className="ravishankar-column">
                    <div className="description-column">
                      <h4 className="section__text--testimonial-1 ui heading size-headings">
                        Training with chaabi has been fruitful towards the behaviour of our on-floor staff. We’ve seen
                        improved understanding of product & process, leading to a better in-store experience for our
                        customers
                      </h4>
                      <div className="section__line--divider-1"></div>
                    </div>
                    <p className="section__text--author ui text size-textlg">
                      Ravishankar Basavaraju<br />GM Human Resources & L&D, Croma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-seven">
            <div className="description-row-inner">
              <div className="column-two">
                <img src={img_image_62_1_2} alt="Image Sixty Two" className="section__image--62" />
              </div>
              <div className="column-three">
                <img src={img_image_55} alt="Image Fifty Five" className="section__image--55" />
                <div className="trending-column">
                  <div className="trending-row-two">
                    <button className="section__icon--trending ui button white_a700_cc size-sm fill round">
                      <img src={img_trending_up} />
                    </button>
                    <div className="revenue-column">
                      <h5 className="section__text--increase ui heading size-headingxl">43% increase</h5>
                      <h6 className="section__text--revenue ui heading size-headings">In Revenue Per Driver</h6>
                    </div>
                  </div>
                  <div className="description-column-two">
                    <h6 className="section__text--testimonial ui heading size-headings">
                      The easy training of our drivers saw a drastic change in their behaviour towards the customers,
                      job & company leading to increased motivation & customer satisfaction.
                    </h6>
                    <div className="section__line--divider"></div>
                    <p className="section__text--author-1 ui text size-textlg">Nishant Saini, Founder EEE Taxi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-nine">
            <div className="vector-forty-eight-row-two">
              <div className="row-eight">
                <img
                  src={img_whatsapp_image_2023_10_06}
                  alt="Whatsapp Image"
                  className="section__image--whatsapp"
                />
              </div>
              <div className="column-four">
                <img src={img_image_59} alt="Image Fifty Nine" className="section__image--59" />
                <div>
                  <div className="trending-row-two">
                    <button className="section__icon--trending ui button white_a700_cc size-sm fill round">
                      <img src={img_trending_up} />
                    </button>
                    <div className="reduction-column">
                      <h1 className="section__text--improvement ui heading size-headingxl">57% Reduction</h1>
                      <h6 className="section__text--satisfaction ui heading size-headings">In Customer Complaints</h6>
                    </div>
                  </div>
                  <div className="ravishankar-column">
                    <div className="description-column">
                      <h6 className="section__text--testimonial-1 ui heading size-headings">
                        The detailed training with chaabi has led to great business impacts. We’ve seen a rise in
                        product adaptation amongst riders leading to an increase in customer satisfaction.
                      </h6>
                      <div className="section__line--divider-1"></div>
                    </div>
                    <p className="section__text--author-2 ui text size-textlg">Madhav Kasturia, Founder & CEO, Zippee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Landing_page;

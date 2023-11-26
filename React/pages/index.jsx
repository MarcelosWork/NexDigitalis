import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  Web <span>Digital</span> <i>Agency</i>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-50 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/hero.jpg" alt="Hero" />
            <div className="hero-social">
              <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-instagram" /> <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Our Main Goal to Satisficed Local &amp; Global Clients
                  </h2>
                </div>
                <div className="content">
                  <p>
                    NexDigitalis, born amidst the vibrant tapestry of Lisbon,
                    Portugal, carries the essence of our city in every digital
                    creation. Our main goal is to empower the digital presence
                    in businesses, marrying the charm of local influence with
                    the impact of a global presence. We don't just aim to
                    satisfy; we strive to exceed expectations, crafting online
                    experiences that resonate with both our local community and
                    clients across the globe.
                  </p>
                  {/* <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Web <span>Digital</span> Agency
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>Provided Services</h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Design & Website Development</h5>
                    <p>
                      Transform ideas into captivating online realities with our
                      sleek website designs and custom-tailored solutions.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Social Media Management</h5>
                    <p>
                      Amplify your brand's voice across platforms with engaging
                      content, strategic campaigns, and meaningful audience
                      connections.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>Branding & Digital Product Design</h5>
                    <p>
                      Bring concepts to life with user-centric branding and
                      digital product designs, marrying creativity with
                      functionality for an impressive user experience.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/services/what-we-do.jpg"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between  ">
            <div className="col-xl-2 col-lg-3 col-6 ">
              <div
                className="counter-item counter-text-wrap wow fadeInUp delay-0-2s"
                style={{ textAlign: "center" }}
              >
                <i className="fal fa-check-circle" />
                <Counter end={11} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Project’s Completed</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Satisfied clients</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={6} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}

      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Digital</span> solutions
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Recent Works Gallery</span>
                <h2>Our Recent Project Gallery</h2>
              </div>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>
                <a
                  target="_blank"
                  href="https://x-entiall.com/"
                  rel="noopener noreferrer"
                >
                  <a>
                    E-Commerce Website and Social Media - Design &amp;
                    Development
                  </a>
                </a>
              </h4>
            </div>
            <div className="image">
              <img
                width={"400px"}
                src="assets/images/projects/project-timeline1.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <a
                target="_blank"
                href="https://x-entiall.com/"
                rel="noopener noreferrer"
              >
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </a>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>
                <a
                  target="_blank"
                  href="https://www.alvarocampeao.com/"
                  rel="noopener noreferrer"
                >
                  <a>Online Coaching Website - Design &amp; Development</a>
                </a>
              </h4>
            </div>
            <div className="image">
              <img
                width={"400px"}
                src="assets/images/projects/project-timeline2.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <a
                target="_blank"
                href="https://www.alvarocampeao.com/"
                rel="noopener noreferrer"
              >
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </a>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <h4>
                <a
                  target="_blank"
                  href="https://line-events.pt/"
                  rel="noopener noreferrer"
                >
                  <a>Event Agency Website - Design &amp; Development</a>
                </a>
              </h4>
            </div>
            <div className="image">
              <img
                width={"400px"}
                src="assets/images/projects/project-timeline3.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <a
                target="_blank"
                href="https://line-events.pt/"
                rel="noopener noreferrer"
              >
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </a>
            </div>

            {/* <div className="col-lg-4 text-lg-end"> */}

            {/* <Link legacyBehavior href="/projects">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  View More Projects <i className="far fa-arrow-right" />
                </a>
              </Link> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* Project Timeline Area end */}

      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-55 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              choose <span>US</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-area pt-90 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-left.jpg"
                  alt="Why Choose Left Image"
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="why-choose-two-wrap">
                <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Elevating Your Digital Presence</h2>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-3s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Competitive Rates</a>
                      </Link>
                    </h4>
                    <p>
                      Competitive rates, providing top-notch services that
                      maximize value for your investment. Elevate your brand
                      without breaking the bank.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-5s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>No Contracts Needed</a>
                      </Link>
                    </h4>
                    <p>
                      Simplify your journey with NexDigitalis, no contracts
                      required. Enjoy the flexibility to adapt your digital
                      strategy without being tied down, making collaboration
                      seamless and stress-free.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-7s">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Powerful Terminal Lines</a>
                      </Link>
                    </h4>
                    <p>
                      Our terminal lines deliver unparalleled performance,
                      ensure swift and efficient delivery, making your digital
                      goals a reality in record time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      {/* <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>clients</span> Say’s
            </span>
          </div>
        </div>
      </div> */}
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      {/* <section className="testimonials-three-area pt-95 rpt-70">
        <div className="container container-1260">
          <div className="row gap-120 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-one-right-part rmb-75">
                <Swiper
                  {...sliderProps.testimonialsThreeActiveSwiper}
                  className="testimonials-three-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s animated">
                  <button className="testimonial-three-prev slick-arrow slick-disabled">
                    <i className="far fa-long-arrow-left" />
                  </button>
                  <div className="testimonial-three-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-three-next slick-arrow">
                    <i className="far fa-long-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-three-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-three.jpg"
                  alt="Testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial Area end */}

      {/* footer area start */}
    </Layout>
  );
};
export default Index;

import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img width={"200px"} src="assets/images/logos/logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a href="https://www.facebook.com/profile.php?id=61554164070683">
                  <i className="fab fa-facebook-f" /> <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/nexdigitalis.pt/">
                  <i className="fab fa-instagram" /> <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <img
                  src="assets/images/footer/lets-work.png"
                  alt="Let's Work Man"
                />
                <span>Let’s Work Together</span>
              </div>
              <div className="footer-contact-info  fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three phone-number"
                  href="https://wa.link/j1f607"
                >
                   <i className="fab fa-whatsapp fa-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className=" text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated text-center">
                <br></br>
                <br></br>
                <p>
                  Copyright @2023,{" "}
                  <Link legacyBehavior href="/">
                    <a>NexDigitalis</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;

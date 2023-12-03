import { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar = () => {
  const submitInfo = (e) => {

    const emailContent = {
      name: e.target[0].value,
      fromEmail: e.target[1].value,
      message: e.target[2].value,
    };

    emailjs
      .send(
        "service_box308l",
        "template_y3yrn89",
        emailContent,
        "X3ODY7tO9ecGwlKCS"
      )
      .then(
        (response) => {
          toast.success(
            "Email sent with success, our team is going back to you as soon as possible.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          toast.error("It didn't work try Whatsapp!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <Fragment>
      <ToastContainer />
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Ask for a budget</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
                submitInfo(e);
              }}
            >
              <div className="form-group">
                <input type="text" name="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} />
              </div>
              <p style={{fontSize:"12px"}}>Our team will respond as quickly as possible.</p>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;

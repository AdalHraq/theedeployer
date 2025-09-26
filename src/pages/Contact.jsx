import React from "react";
import "./Contact.css";
import ParticleBackground from "../components/ParticleBackground"; 
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa"; // ✅ React Icons

const Contact = () => {
  return (
    <section className="contact-section">
      {/* ✅ Particles in background */}
      <ParticleBackground />

      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Ready to start your project? We'd love to hear from you. Send us a
          message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        {/* ✅ Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form action="https://formspree.io/f/mjkrqdng" method="POST">
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
            />

            <select name="service">
              <option value="">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>

            <select name="budget">
              <option value="">Select budget range</option>
              <option value="£500 - £1,000">£500 - £1,000</option>
              <option value="£1,000 - £5,000">£1,000 - £5,000</option>
              <option value="£5,000+">£5,000+</option>
            </select>

            <textarea
              name="description"
              placeholder="Tell us about your project..."
              rows="4"
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* ✅ Contact Details */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <strong>Location:</strong>
            <br />
            Remote – United Kingdom
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            <a href="mailto:theedeployer@hotmail.com">
              theedeployer@hotmail.com
            </a>
          </p>

          {/* ✅ Social Buttons with React Icons */}
          <div className="social-buttons icon-style">
            <p><strong>Connect with us:</strong></p>
            <div className="icon-row">
              <a
                href="https://www.instagram.com/theedeployer"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn instagram-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@theedeployer"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn tiktok-icon"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="mailto:theedeployer@hotmail.com"
                className="icon-btn email-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="availability">
            <p>
              <strong>Availability:</strong>
              <br />
              We operate remotely and are available 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


'use client';

import { IoIosMail } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { Accordion, useMediaQuery } from 'rsuite';
// import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  // console.log('is on mobile' + isMobile);

  return (
    <div>
      {isMobile ? (
        <div className="footer-container">
          <Accordion defaultActiveKey={1} bordered>
            <Accordion.Panel
              header={<p className="main-color">Contact Us</p>}
              eventKey={1}
            >
              <div className="footer-connectus-container textStart">
                <ul>
                  <li>
                    <span className="footer-icon-wrapper">
                      <IoIosMail className="footer-icon" />
                    </span>
                    <a
                      href="mailto:navratnajewellers0@gmail.com"
                      title="Write to us"
                    >
                      Write to Us
                    </a>
                  </li>
                  <li>
                    <span className="footer-icon-wrapper footer-call-icon">
                      <IoCallOutline className="footer-icon" />
                    </span>
                    <a href="tel:+91 7004220367" title="Call us">
                      7004220367
                    </a>
                  </li>
                  <li>
                    <span className="footer-icon-wrapper footer-loc-icon">
                      <FaLocationArrow className="footer-icon" />
                    </span>
                    <a
                      target="_blank"
                      title="Find a store loaction"
                      href="https://maps.app.goo.gl/mzKSgSyRAtaYwsWA9"
                    >
                      Find Store
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
            <Accordion.Panel
              header={<p className="main-color">Information</p>}
              eventKey={2}
            >
              <div className="footer-useful-info-container">
                <ul>
                  <li>
                    <a href="" target="_blank">
                      Offers & Contest Details
                    </a>
                  </li>
                  <li>
                    <a href="/page/ahout-us">About Navratna Jewellers</a>
                  </li>
                  <li>
                    <a href="/page/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/page/term-condition">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="/page/return-policy">Return Policy</a>
                  </li>
                  <li>
                    <a href="/page/shipping-policy">Shipping Policy</a>
                  </li>
                </ul>
              </div>
            </Accordion.Panel>
            <Accordion.Panel
              header={<p className="main-color">Follow Us On</p>}
              eventKey={3}
            >
              <div className="footer-social-media-container">
                <div>
                  <a
                    href="https://www.facebook.com/navratna.jewellersranchi?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <span className="social-media-icon-wrapper">
                      <FaFacebookF className="footer-icon icon-facebook" />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/navratnajewellers?igsh=NDNnOTI4M29ocG42"
                    target="_blank"
                  >
                    <span className="social-media-icon-wrapper">
                      <FaInstagram className="footer-icon icon-instagram" />
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCJtHOvMfpXb1MJUqURk8Orw"
                    target="_blank"
                  >
                    <span className="social-media-icon-wrapper">
                      <FaYoutube className="footer-icon icon-youtube" />
                    </span>
                  </a>
                  <a
                    href="https://in.pinterest.com/navratnajewellersranchi/"
                    target="_blank"
                  >
                    <span className="social-media-icon-wrapper">
                      <FaPinterest className="footer-icon icon-pinterest" />
                    </span>
                  </a>
                </div>
              </div>
            </Accordion.Panel>
          </Accordion>
        </div>
      ) : (
        <div className="footer-container textCenter">
          <div className="footer-connectus-container textStart">
            <div>
              <h3>Contact Us</h3>
            </div>
            <ul>
              <li>
                <span className="footer-icon-wrapper">
                  <IoIosMail className="footer-icon" />
                </span>
                <a href="mailto:navratnajewellers0@gmail.com">Write to Us</a>
              </li>
              <li>
                <span className="footer-icon-wrapper footer-call-icon">
                  <IoCallOutline className="footer-icon" />
                </span>
                <a href="tel:+91 7004220367">7004220367</a>
              </li>
              <li>
                <span className="footer-icon-wrapper footer-loc-icon">
                  <FaLocationArrow className="footer-icon" />
                </span>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/mzKSgSyRAtaYwsWA9"
                >
                  Find Store
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-useful-info-container">
            <div>
              <h3>Information</h3>
            </div>
            <ul>
              <li>
                <a href="/" target="_blank">
                  Offers & Contest Details
                </a>
              </li>
              <li>
                <a href="/page/ahout-us">About Navratna Jewellers</a>
              </li>
              <li>
                <a href="/page/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/page/term-condition">Terms & Condition</a>
              </li>
              <li>
                <a href="/page/return-policy">Return Policy</a>
              </li>
              <li>
                <a href="/page/shipping-policy">Shipping Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-media-container">
            <div>
              <h3>Follow Us On</h3>
            </div>
            <div>
              <a
                href="https://www.facebook.com/navratna.jewellersranchi?mibextid=LQQJ4d"
                target="_blank"
              >
                <span className="social-media-icon-wrapper">
                  <FaFacebookF className="footer-icon icon-facebook" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/navratnajewellers?igsh=NDNnOTI4M29ocG42"
                target="_blank"
              >
                <span className="social-media-icon-wrapper">
                  <FaInstagram className="footer-icon icon-instagram" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCJtHOvMfpXb1MJUqURk8Orw"
                target="_blank"
              >
                <span className="social-media-icon-wrapper">
                  <FaYoutube className="footer-icon icon-youtube" />
                </span>
              </a>
              <a
                href="https://in.pinterest.com/navratnajewellersranchi/"
                target="_blank"
              >
                <span className="social-media-icon-wrapper">
                  <FaPinterest className="footer-icon icon-pinterest" />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div>
        <strong>
          <small className="copyright-text">
            Copyright &copy; {new Date().getFullYear()}{' '}
          </small>
        </strong>
      </div>
    </div>
  );
};

export default Footer;

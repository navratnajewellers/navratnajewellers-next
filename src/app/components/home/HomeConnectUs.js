'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { motion } from 'motion/react';

const HomeConnectUs = () => {
  return (
    <div className="home-connect-us-container dis-flex">
      <motion.div
        className="connect-us-wrapper"
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div>
            <h4>Connect On</h4>
            <h3>
              <strong className="color-green">WhatsApp</strong>
            </h3>
          </div>
          <a
            className="header-text-connect dis-flex"
            target="_blank"
            title="connect to whatsapp"
            href="https://api.whatsapp.com/send?phone=917004220367&text=Hi,%20Can%20I%20connect%20with%20Navranta%20Jewellers%20customer%20care!"
          >
            <span>Connect</span>
            <span>&rarr;</span>
          </a>
        </div>
        <div className="header-connectus-icon">
          <FaWhatsapp className="height-width-100 color-green" />
        </div>
      </motion.div>
      <motion.div
        className="connect-us-wrapper"
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div>
            <h4>Book an</h4>
            <h3>
              <strong className="color-blue">Appointment</strong>
            </h3>
          </div>
          <a
            title="Make a booking"
            href="tel:+91 7004220367"
            className="header-text-connect dis-flex"
          >
            <span title="Make a booking" href="tel:+91 7004220367">
              Book
            </span>
            <span>&rarr;</span>
          </a>
          {/* <div className="header-text-connect dis-flex">
            <a title="Make a booking" href="tel:+91 7004220367">
              Book
            </a>
            <span>&rarr;</span>
          </div> */}
        </div>
        <div className="header-connectus-icon">
          <IoLocation className="height-width-100 color-blue" />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeConnectUs;

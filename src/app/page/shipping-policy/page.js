'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useWebStatus } from '@/app/context/status.context';
import { useEffect, useState } from 'react';
import { Affix } from 'rsuite';

export default function ShippingPolicyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // check the website update status
  const { isWebsiteOnUpdate } = useWebStatus();

  if (isWebsiteOnUpdate) {
    window.location.replace('/');
  }

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="margin-t50 padding-lr5 ">
        <h3 className="textCenter main-color margin-b30">
          Shipping And Delivery
        </h3>

        <p>
          The User may avail services through the Platform and the Company shall
          dispatch the orders placed through booking on the Platform. The time
          frame for delivery to be completed from 3 to 10 working days within
          the country shall be based on the location.. Such services shall be
          placed for delivery through the third-party service provider providing
          services in user’s city, state.
        </p>

        <p>&nbsp;</p>

        <p>
          <strong>Shipping Timelines</strong>
        </p>

        <ul>
          <li>
            <p>
              All the tracking details shall be emailed to the Email Id provided
              by user on registering on our platform. The user shall have access
              to these details upon availing the services.
            </p>
          </li>

          <li>
            <p>
              All services on our platform shall be inclusive of all charges as
              mentioned on the website and final invoice that will be generated.
              User can also see the tracking details through the AWB number
              provided.
            </p>
          </li>

          <li>
            <p>
              If the delivery is incomplete or the delivery has not been
              undertaken, then the User may raise a complaint on our Customer
              support email Id provided on the Terms of Service and Privacy
              Policy. We may investigate into the issue and then proceed at the
              earliest in case of a discrepancy in providing services to user.
            </p>
          </li>

          <p>&nbsp;</p>
        </ul>

        <p>
          <strong>Online Tracking</strong>
        </p>

        <ul>
          <li>
            <p>
              All the tracking details shall be SMSed as well as Emailed to the
              Registered Mobile Number and Email Id provided by user on
              registering on our platform. User may have access to these details
              upon availing the services.
            </p>
          </li>

          <li>
            <p>
              All products placed online will be eligible for online tracking
              with a tracking ID for order by which user can track delivery on
              the Platform.
            </p>
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
}

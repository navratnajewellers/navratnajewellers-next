'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useWebStatus } from '@/app/context/status.context';
import { useEffect, useState } from 'react';
import { Affix } from 'rsuite';

export default function PrivacyPolicyPage() {
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
      <div className="margin-t50 padding-lr5 margin-b100">
        <h3 className="main-color textCenter margin-b30">Privacy Policy</h3>
        <p>
          <strong>
            <strong>Returns policy</strong>
          </strong>
        </p>

        <p>
          Definition: &apos;return&apos; is defined as the action of giving back
          the item purchased by the buyer to the Navratna Jewellers on the
          www.navratnajewellers.in website.
        </p>

        <p>Following situations may arise:</p>

        <ul>
          <li>
            <p>Item was defective</p>
          </li>
          <li>
            <p>Item was damaged during the shipping</p>
          </li>
          <li>
            <p>Products was / were missing</p>
          </li>
          <li>
            <p>Wrong item was sent by the www.navratnajewellers.in</p>
          </li>
        </ul>

        <p>Return could also result in refund of money in most of the cases.</p>

        <p>
          <strong>Points to be noted:</strong>
        </p>

        <ul>
          <li>
            <p>
              www.navratnajewellers.in can always accept the retun irrespective
              of the policy.
            </p>
          </li>
          <li>
            <p>
              If www.navratnajewellers.in disagrees a return request, buyer can
              file a dispute under the buyer protection program.
            </p>
          </li>
        </ul>

        <p>
          <strong>Replacement</strong>
        </p>

        <p>
          Definition: replacement is the action or process of replacing
          something in place of another. A buyer can request for replacement
          whenever he is not happy with the item, reason being damaged in
          shipping, defective item, item(s) missing, wrong item shipped and the
          like.
        </p>

        <p>
          <strong>Points to be noted:</strong>
        </p>

        <ul>
          <li>
            <p>
              www.navratnajewellers.in can always accept the return irrespective
              of the policy.
            </p>
          </li>
          <li>
            <p>
              If www.navratnajewellers.in disagrees for a return request, buyer
              can file a dispute under buyer protection program.
            </p>
          </li>
        </ul>

        <p>
          Buyer need to raise the replacement request within 10 days from the
          date of delivery of products. Once buyer has raised a replacement
          request by contacting us on the toll free number provided on the
          website. Once the replacement request has been raised, the following
          steps shall be followed:
        </p>

        <p>
          Buyer is asked for<strong>&quot;reason for return&quot;</strong>.
        </p>

        <p>Among others, the following are the leading reasons:</p>

        <ul>
          <li>
            <p>Shipping was damaged</p>
          </li>
          <li>
            <p>Item was defective</p>
          </li>
          <li>
            <p>Item dead on arrival</p>
          </li>
          <li>
            <p>Item(s) were missing</p>
          </li>
        </ul>

        <p>
          <strong>Disputes (resolutions) policy</strong>
        </p>

        <p>Overview</p>

        <p>
          Generally, transactions are conducted smoothly on
          www.navratnajewellers.in . However there maybe some cases where both
          the buyers and www.navratnajewellers.in &apos;s may face issues. At
          www.navratnajewellers.in , we have a dispute resolution process in
          order to resolve disputes between buyers and www.navratnajewellers.in
          &apos;s.
        </p>

        <p>
          <strong>Email abuse &amp; threat policy</strong>
        </p>

        <p>
          Private communication, including email correspondence, is not
          regulated by www.navratnajewellers.in . www.navratnajewellers.in
          encourages its users to be professional, courteous and respectful when
          communicating by email.
        </p>

        <p>
          However, www.navratnajewellers.in will investigate and can take action
          on certain types of unwanted emails that violate
          www.navratnajewellers.in policies.
        </p>

        <p>Such instances:</p>

        <p>
          <strong>Threats of bodily harm</strong>- www.navratnajewellers.in does
          not permit users to send explicit threats of bodily harm.
        </p>

        <p>
          <strong>Misuse of www.navratnajewellers.in system</strong>-
          www.navratnajewellers.in allows users to facilitate transactions
          through the www.navratnajewellers.in system, but will investigate any
          misuse of this service.
        </p>

        <p>
          <strong>Spoof (fake) email</strong>- www.navratnajewellers.in will
          never ask you to provide sensitive information through email. In case
          you receive any spoof (fake) email, you are requested to report the
          same to us through &apos;contact us&apos; tab.
        </p>

        <p>
          <strong>Spam (unsolicited commercial email)</strong>-
          www.navratnajewellers.in &apos; s spam policy applies only to
          unsolicited commercial messages sent by www.navratnajewellers.in
          users. www.navratnajewellers.in users are not allowed to send spam
          messages to other users.
        </p>

        <p>
          <strong>
            Offers to buy or sell outside of www.navratnajewellers.in{' '}
          </strong>
          - www.navratnajewellers.in prohibits email offers to buy or sell
          listed products outside of the www.navratnajewellers.in website.
          Offers of this nature are a potential fraud risk for both buyers and
          www.navratnajewellers.in &apos;s.
        </p>

        <p>
          www.navratnajewellers.in policy prohibits user-to-user threats of
          physical harm via any method including, phone, email and on our public
          message boards.
        </p>

        <p>
          Violations of this policy may result in a range of actions, including:
        </p>

        <ul>
          <li>
            <p>Limits on account privileges</p>
          </li>
          <li>
            <p>Account suspension</p>
          </li>
          <li>
            <p>Cancellation of listings</p>
          </li>
          <li>
            <p>Loss of special status</p>
          </li>
        </ul>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
}

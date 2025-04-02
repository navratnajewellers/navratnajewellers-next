'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useWebStatus } from '@/app/context/status.context';
import { useEffect, useState } from 'react';
import { Affix } from 'rsuite';

export default function AboutUsPage() {
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
      <div className="margin-t50 margin-b100 textCenter padding-lr5">
        <h3 className="main-color margin-b30 ">About Us</h3>
        <p>
          Designer jewellery collections, featuring exquisite designs that blend
          western and eastern culture while keeping pace with the ever-changing
          lifestyle of our trendsetters.
        </p>

        <p>
          Our fusion-inspired jewellery is meticulously handcrafted by our top
          notch artisans and craftsmen.
        </p>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
}

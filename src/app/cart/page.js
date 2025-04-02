'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
}

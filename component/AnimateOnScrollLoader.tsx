'use client';
import { useEffect } from 'react';
import AOS from 'aos';

export function AnimateOnScrollLoader() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 300,
      easing: 'ease-out-cubic',
    });
  });
  return null;
}

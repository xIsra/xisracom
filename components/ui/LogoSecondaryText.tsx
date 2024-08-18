'use client';
import { useEffect, useState } from 'react';
import { getRandomGoodbyes, getRandomGreetings } from '@/libs/greetings';

export function LogoSecondaryText({ type = 'default' }) {
  const [secondary, setSecondary] = useState(
    type === 'default' ? 'Hello!' : type === 'footer' ? 'Good bye' : ''
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (type === 'default') {
        setSecondary(getRandomGreetings());
      } else if (type === 'footer') {
        setSecondary(getRandomGoodbyes());
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [type]);

  return <>{secondary}</>;
}

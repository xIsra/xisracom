import Hero from '@/components/HeroHome';
import HeroPortfolio from '@/components/HeroPortfolio';
import HeroContact from '../components/HeroContact';
import HeroBlog from '../components/HeroBlog';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
};

export default function Home() {
  return (
    <>
      <Hero />
      <HeroPortfolio />
      <HeroBlog />
      <HeroContact />
    </>
  );
}

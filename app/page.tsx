import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import BenefitCards from '@/components/BenefitCards';

export const metadata: Metadata = {
  title: 'Home | Veldon Paints',
  description:
    'Veldon Paints - Custom industrial paint solutions for manufacturing. Trusted by Ramco, Visaka Steel, and leading manufacturers.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesGrid />
      <BenefitCards />
    </>
  );
}
